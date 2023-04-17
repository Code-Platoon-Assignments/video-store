import InventoryItem from './InventoryItem';
import './HomePage.css';

export default function HomePage(props) {
    return (
        <>
            <h2>Inventory</h2>
            <div className="title_container">
                {
                    props.inventory.map(inventoryItem => (
                        <InventoryItem
                            key={inventoryItem.id}
                            title={inventoryItem.title}
                            imgUrl={inventoryItem.imgUrl}
                            copiesAvailable={inventoryItem.copiesAvailable}
                            totalAvailable={inventoryItem.totalAvailable}
                        />
                    ))
                }
            </div>
        </>
    );
}