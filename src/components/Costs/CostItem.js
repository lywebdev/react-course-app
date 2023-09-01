import './CostItem.css';
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function CostItem(props) {
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('new text');
    }

    return (
        <Card className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <h2 className='cost-item__price'>${props.amount}</h2>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
}

export default CostItem;