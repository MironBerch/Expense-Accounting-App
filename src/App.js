import './components/CostItem.css';
import Card from './components/Card';
import Costs from './components/Costs';
import NewCost from './components/NewCost/NewCost';


function App() {
    const costs = [
    {
        id: 'c1',
        date: new Date(2021, 2, 12),
        description: 'Игра',
        amount: 15
    },
    {
        id: 'c2',
        date: new Date(2022, 10, 20),
        description: 'Докимакура',
        amount: 999
    }
    ];

	const addCostHandler = (cost) => {
		console.log(cost);
		console.log('App component');
	};

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