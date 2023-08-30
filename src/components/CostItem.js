import './CostItem.css';
import CostDate from "./CostDate";

function CostItem(props) {
    return (<div className='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{props.description}</h2>
            <h2 className='cost-item__price'>${props.amount}</h2>
        </div>
    </div>);
}

export default CostItem;