import './components/CostItem.css';
import Card from './components/Card';
import Costs from './components/Costs';


function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Игра',
      amount: 15
    },
    {
      date: new Date(2022, 10, 20),
      description: 'Докимакура',
      amount: 999
    }
  ];
  return (
    <div>
      <Card cost-item>
        <Costs costs={costs}/>
      </Card>
    </div>
  );
}

export default App;