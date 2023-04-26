import './InventoryItem.css';

export default function InventoryItem(props) {
    const {
        id,
        title,
        imgUrl,
        copiesAvailable,
        setSelectedFilmById
    } = props;

    return (
        <div className="inventory_item" onClick={event => {
            // necessary to prevent container onclick from overriding
            event.stopPropagation();
            setSelectedFilmById(id);
        }}>
            <h3 className="item_title">{title}</h3>
            <img src={imgUrl} width={200} height={300} />
            <div className="item_actions">
                {copiesAvailable} available
            </div>
        </div>
    );
}