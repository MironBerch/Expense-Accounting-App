import './components/CostItem.css';
import Card from './components/Card';
import Costs from './components/Costs';
import NewCost from './components/NewCost/NewCost';
import React, { useState } from 'react';


const INITIAL_COSTS = [];

const App = () => {

    const [costs, setCosts] = useState(INITIAL_COSTS);

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        }
        )
    }

    console.log(costs);

    return (
      <div>
        <Card cost-item>
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs}/>
      </Card>
    </div>
  );
}

export default App;