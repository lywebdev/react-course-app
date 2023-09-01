import CostItem from "./CostItem";
import './Costs.css';

function Costs(props) {
    return (
        <div>
            <CostItem
                date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount}
            />
        </div>
    );
}

export default Costs;