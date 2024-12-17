import styles from './employees-list-item.module.sass';
import '@flaticon/flaticon-uicons/css/all/all.css';

const EmployeesListItem = (props) => {

    const {name, salary, onDelete, onToggleProp, increase, rise} = props;

    let classNames = `${styles.listGroupItem}`;
    if (increase) {
        classNames += ` ${styles.increase}`;
    }
    if (rise) {
        classNames += ` ${styles.like}`;
    }

    return (
        <li className={classNames}>
            <span className={styles.listGroupLabel} onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className={styles.listGroupInput} defaultValue={salary + '$'}/>
            <div className={styles.listGroupIcons}>
                <i 
                    className="fi fi-rs-rocket-lunch"
                    onClick={onToggleProp}
                    data-toggle="increase">
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