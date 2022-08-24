import './Card.css';
import CostDate from './CostDate';


function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;