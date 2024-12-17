import styles from './app-filter.module.sass';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button
                className={styles.btn_filter}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className={styles.filter_group}>
            {buttons}
        </div>
    )
}

export default AppFilter;