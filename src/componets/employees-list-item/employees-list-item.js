import { useState } from 'react';
import styles from './employees-list-item.module.sass';
import '@flaticon/flaticon-uicons/css/all/all.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;
    const [isFocus, setIsFocus] = useState(false);
    const [isIncreased, setIsIncreased] = useState(increase);
    const [isPromotion, setPromotion] = useState(increase);

    const handleOnFocus = () => {
        setIsFocus(true);
    }

    const handleBlur = () => {
        setIsFocus(false);
    }

    const handleToggleIncrease = (e) => {
        setIsIncreased(prev => !prev);
        onToggleProp(e);
    }

    const handleTogglePromotion = (e) => {
        setPromotion(prev => !prev);
        onToggleProp(e);
    }

    let classNames = `${styles.listGroupItem}`;
    if (setIsIncreased) {
        classNames += ` ${styles.increase}`;
    }
    if (rise) {
        classNames += ` ${styles.like}`;
    }

    return (
        <li className={classNames}>
            <span 
                className={styles.listGroupLabel} 
                onClick={handleToggleIncrease}
                onFocus={handleOnFocus}
                onBlur={handleBlur}
                data-toggle="rise"
                style={{ color: isIncreased ? '#e500e4' : 'inherit' }}>
                    {name}
            </span>
            <input 
                type="text" 
                className={styles.listGroupInput} 
                defaultValue={salary + '$'}
            />
            <div className={styles.listGroupIcons}>
                <i 
                    className="fi fi-rs-rocket-lunch"
                    onClick={handleTogglePromotion}
                    data-toggle="increase"
                    style={{ color: isPromotion ? '#00e573' : 'inherit' }}>
                </i>
                <i 
                    className="fi fi-rs-trash"
                    onClick={onDelete}>
                </i>
                <i className="fi fi-rr-heart"></i>
            </div>
        </li>
    );
}

export default EmployeesListItem;