import './InventoryItem.css';

export default function InventoryItem(props) {
    const {
        title,
        imgUrl,
        copiesAvailable,
        totalAvailable
    } = props;

    const checkoutTitle = (event) => {
        alert(`If you were to check out ${title} there would now be ${copiesAvailable - 1} copies available.`);
    };

    return (
        <div className="inventory_item">
            <h3 className="item_title">{title}</h3>
            <img src={imgUrl} />
            <div className="item_actions">
                {copiesAvailable}/{totalAvailable} available
                <button
                    disabled={copiesAvailable === 0}
                    onClick={checkoutTitle}
                >Check Out</button>
            </div>
        </div>
    );
}