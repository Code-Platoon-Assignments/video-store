import { useNavigate } from "react-router-dom";
import './InventoryItem.css';

export default function InventoryItem(props) {
    const {
        id,
        title,
        imgUrl,
        copiesAvailable
    } = props;

    const navigate = useNavigate();

    return (
        <div
            className="inventory_item"
            onClick={() => navigate(`/film/${id}`)}
        >
            <h3 className="item_title">{title}</h3>
            <img src={imgUrl} width={200} height={300} />
            <div className="item_actions">
                {copiesAvailable} available
            </div>
        </div>
    );
}