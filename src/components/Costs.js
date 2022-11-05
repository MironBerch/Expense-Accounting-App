import CostItem from './CostItem';
import './Costs.css';
import CostsFilter from './CostsFilter';
import React, {useState} from 'react';


const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }

    return (
    <div>
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
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

export default Costs;