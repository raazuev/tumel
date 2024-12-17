import styles from './app-info.module.sass';

const AppInfo = ({increased, employees}) => {
    return (
        <div className={styles.app_info}>
            <h1>Учёт сотрудников в компании Tumel</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;