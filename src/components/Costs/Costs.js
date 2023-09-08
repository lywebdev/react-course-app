import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear.toString();
    });


    return (
        <div>
            <Card className='costs'>
                <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
            </Card>
        </div>
    );
}

export default Costs;