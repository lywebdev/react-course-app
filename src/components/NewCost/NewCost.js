import CostForm from "./CostForm";
import './NewCost.css';
import {useState} from "react";

const NewCost = (props) => {
    const [visibleForm, setVisibleForm] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }

        props.onAddCost(costData);
    }

    const openFormHandler = () => {
        setVisibleForm(true);
    }

    const closeFormHandler = () => {
        setVisibleForm(false);
    }


    return <div className='new-cost'>
        {visibleForm === false && <button type='button' onClick={openFormHandler}>Добавить новый расход</button>}
        {visibleForm === true && <CostForm onSaveCostData={saveCostDataHandler} onCloseFormHandler={closeFormHandler} />}
    </div>;
}

export default NewCost;