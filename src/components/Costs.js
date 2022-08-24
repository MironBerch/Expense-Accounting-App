import CostItem from './CostItem';
import './Costs.css';

function Costs(props) {
    return (
    <div>
        <CostItem
        className='costs'
        date={props.costs[0].date} 
        description={props.costs[0].description} 
        amount={props.costs[0].amount}
        />
        <CostItem 
        className='costs'
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
        />
    </div>
    );
}

export default Costs