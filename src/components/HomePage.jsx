import { useOutletContext } from "react-router-dom";
import InventoryItem from './InventoryItem';
import './HomePage.css';

export default function HomePage() {
    const { inventory } = useOutletContext();

    return (
        <div className="page_container">
            <h2>Inventory</h2>
            <div className="section_container">
                {
                    // inventoryItem will need to be updated once you integrate with OMDB API
                    inventory.map(inventoryItem => {
                        const {
                            id,
                            copiesAvailable,
                            Title,
                            Poster,
                        } = inventoryItem;

                        return (
                            <InventoryItem
                                key={id}
                                id={id}
                                title={Title}
                                imgUrl={Poster}
                                copiesAvailable={copiesAvailable}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}