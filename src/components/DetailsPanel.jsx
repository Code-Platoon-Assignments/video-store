import "./DetailsPanel.css";

export default function DetailsPanel(props) {
    const { selectedFilm, checkoutOrReturnFilmById } = props;
    const {
        id,
        copiesAvailable,
        totalAvailable,
    } = selectedFilm;

    return (
        <div className="section_container">
            <h2>Details</h2>
            <div className="basic_container_column">
                <h3>{'DUMMY_TITLE'}</h3>
                <div className="basic_container_row align_center">
                    <img src={'https://placehold.co/200x300'} />
                    <p>{'DUMMY_DESCRIPTION Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque deserunt dolores autem laborum delectus, nemo quas nam deleniti eligendi enim minus ratione. Molestias tempora quam debitis quae unde eos dolores.'}</p>
                    <pre style={{ fontSize: "40px" }}>{'DUMMY_RATING'}</pre>
                </div>
                <div className="basic_container_column">
                    {copiesAvailable} / {totalAvailable} available
                    <div className="basic_container_row">
                        <button
                            disabled={copiesAvailable === 0}
                            onClick={() => checkoutOrReturnFilmById(id, "checkout")}
                        >Check out</button>
                        <button
                            disabled={copiesAvailable === totalAvailable}
                            onClick={() => checkoutOrReturnFilmById(id, "return")}
                        >Return</button>
                    </div>
                </div>

            </div>
        </div>
    );
}