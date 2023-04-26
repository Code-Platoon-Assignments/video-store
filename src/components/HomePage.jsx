import InventoryItem from './InventoryItem';
import DetailsPanel from './DetailsPanel';

import './HomePage.css';

export default function HomePage(props) {
    const {
        inventory,
        selectedFilm,
        setSelectedFilmById,
        checkoutOrReturnFilmById
    } = props;

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
                        } = inventoryItem;

                        return (
                            <InventoryItem
                                key={id}
                                id={id}
                                title={'DUMMY_TITLE'}
                                imgUrl={'https://placehold.co/200x300'}
                                copiesAvailable={copiesAvailable}
                                setSelectedFilmById={setSelectedFilmById}
                            />
                        )
                    })
                }
                <button onClick={() => setSelectedFilmById(null)}>Clear Selection</button>
            </div>
            {/* will only render if there is a selectedFilm (not null) */}
            {selectedFilm && (
                <DetailsPanel
                    selectedFilm={selectedFilm}
                    checkoutOrReturnFilmById={checkoutOrReturnFilmById}
                />
            )}
        </div>
    );
}