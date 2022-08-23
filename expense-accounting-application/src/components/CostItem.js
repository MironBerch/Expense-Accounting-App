import './CostItem.css';

function CostItem() {
    return (
        <div className='cost-item'>
            <div>октябрь 2022 12</div>
            <div className='cost-item__description'>
                <h2>Докимакура</h2>
                <div className='cost-item__price'>$59</div>
            </div>
        </div>
    );
}

export default CostItem;