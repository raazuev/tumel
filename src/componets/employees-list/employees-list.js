import EmployeesListItem from "../employees-list-item/employees-list-item";
import styles from './employees-list.module.sass';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    });

    return (
       <ul className={styles.listGroup}>
            {elements}
       </ul> 
    );
}

export default EmployeesList;