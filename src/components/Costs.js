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
        {props.costs.map((cost) => (
            <CostItem 
                date={cost.date} 
                description={cost.description} 
                amount={cost.amount} 
                />
            ))}
    </div>
    );
}

export default Costs;