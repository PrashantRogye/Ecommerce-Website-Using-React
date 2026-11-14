import "./AnnouncementBar.css";

const AnnouncementBar = () => {
    return (
        <div className="announcement-bar">
            <p>
                Free shipping on orders above ₹999
                <span> | </span>
                <a href="/products">Shop Now</a>
            </p>
        </div>
    );
};

export default AnnouncementBar;