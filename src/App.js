import CostItem from "./components/Costs/CostItem";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
    const costs = [
        {
            id: 'c1',
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            amount: 999.99,
        },
        {
            id: 'c2',
            date: new Date(2023, 9, 1),
            description: 'MacBook',
            amount: 49.99,
        },
        {
            id: 'c3',
            date: new Date(2022, 12, 10),
            description: 'Джинсы',
            amount: 45,
        }
    ];

    const addCostHandler = (cost) => {
        console.log(cost);
        console.log('App component')
    }

    return (
        <div className="App">
            {/*<h1>Начнём изучение react</h1>*/}
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs} />
        </div>
    );
}

export default App;
