import './CostForm.css';
import React, { useState } from 'react';


const CostForm = () => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costDate = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        setInputName('');
        setInputAmount('');
        setInputDate('');

    };


    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input type='text' value={inputName} onChange={nameChangeHandler} />
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input type='number' value={inputAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input type='date' value={inputDate} onChange={dateChangeHandler} />
            </div>
            <div className='new-cost__actions'>
                <button type='submit' >Добавить расход</button>
            </div>
        </div>
    </form>
}


export default CostForm;