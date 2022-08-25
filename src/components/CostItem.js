import './CostItem.css';
import CostDate from './CostDate';
import React, { useState } from 'react';


function CostItem(props) {
    const [description, setDescription] = useState(props.description);

    const changeDescriptionHandler = () => {
        setDescription('New');
        console.log('changeDescription');
    }

    return (
         <div className='cost-item'>
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button
            onClick={changeDescriptionHandler}>
            Изменить описание
            </button>
        </div>
    );
}

export default CostItem;