import CostItem from './components/CostItem';


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
      <h1>Hello</h1>
      <CostItem 
      date={costs[0].date} 
      description={costs[0].description} 
      amount={costs[0].amount}
      />
      <CostItem date={costs[1].date
      } description={costs[1].description}
       amount={costs[1].amount}
      />
    </div>
  );
}

export default App;