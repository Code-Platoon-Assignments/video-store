import "./DetailsPanel.css";

export default function DetailsPanel(props) {
    const { selectedFilm, checkoutOrReturnFilmById } = props;
    const {
        id,
        title,
        imgUrl,
        copiesAvailable,
        totalAvailable,
        rating,
        description
    } = selectedFilm;

    return (
        <div className="section_container">
            <h2>Details</h2>
            <div className="basic_container_column">
                <h3>{title}</h3>
                <div className="basic_container_row align_center">
                    <img src={imgUrl} />
                    <p>{description}</p>
                    <pre style={{ fontSize: "40px" }}>{rating}</pre>
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