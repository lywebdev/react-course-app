import CostItem from "./CostItem";
import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <div>
            <Card className='costs'>
                <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
                {props.costs.map(cost => (
                    <CostItem
                        date={cost.date}
                        description={cost.description}
                        amount={cost.amount}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Costs;