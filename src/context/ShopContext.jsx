
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const ShopContext = createContext(null);

const readStorage = (key) => {
    try {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : [];
    } catch {
        return [];
    }
};

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState(() => readStorage("electrohub-cart"));
    const [wishlist, setWishlist] = useState(() =>
        readStorage("electrohub-wishlist")
    );

    const [orders, setOrders] = useState(() =>
        readStorage("electrohub-orders")
    );

    const placeOrder = ({ address, paymentMethod }) => {
        if (cart.length === 0) {
            throw new Error("Your cart is empty.");
        }

        const subtotal = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );

        const shipping = subtotal >= 999 ? 0 : 99;

        const newOrder = {
            id: `EH${Date.now()}`,
            items: cart.map((item) => ({ ...item })),
            address: { ...address },
            paymentMethod,
            subtotal,
            shipping,
            total: subtotal + shipping,
            status: "Confirmed",
            createdAt: new Date().toISOString(),
        };

        setOrders((previous) => [newOrder, ...previous]);
        setCart([]);

        return newOrder;
    };

    useEffect(() => {
        localStorage.setItem("electrohub-orders", JSON.stringify(orders));
    }, [orders]);

    // Save cart whenever it changes.
    useEffect(() => {
        localStorage.setItem("electrohub-cart", JSON.stringify(cart));
    }, [cart]);

    // Save wishlist whenever it changes.
    useEffect(() => {
        localStorage.setItem("electrohub-wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Add product to cart.
    const addToCart = (product, quantity = 1) => {
        setCart((previous) => {
            const existing = previous.find((item) => item.id === product.id);

            if (existing) {
                return previous.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...previous, { ...product, quantity }];
        });
    };

    // Remove product from cart.
    const removeFromCart = (productId) => {
        setCart((previous) =>
            previous.filter((item) => item.id !== productId)
        );
    };

    // Update cart quantity.
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;

        setCart((previous) =>
            previous.map((item) =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Add or remove product from wishlist.
    const toggleWishlist = (product) => {
        setWishlist((previous) => {
            const exists = previous.some((item) => item.id === product.id);

            return exists
                ? previous.filter((item) => item.id !== product.id)
                : [...previous, product];
        });
    };

    const isInWishlist = (productId) =>
        wishlist.some((item) => item.id === productId);

    const clearCart = () => setCart([]);

    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const cartSubtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const shipping = cartSubtotal === 0 || cartSubtotal >= 999 ? 0 : 99;
    const cartTotal = cartSubtotal + shipping;

    const value = useMemo(
        () => ({
            cart,
            wishlist,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleWishlist,
            isInWishlist,
            clearCart,
            cartCount,
            cartSubtotal,
            shipping,
            cartTotal,
            orders,
            placeOrder,
        }),
        [cart, wishlist, orders, cartCount, cartSubtotal, shipping, cartTotal]
    );

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);

    if (!context) {
        throw new Error("useShop must be used inside ShopProvider");
    }

    return context;
};
