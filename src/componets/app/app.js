import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import styles from './app.module.sass';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            term: '',
            filter: 'all' 
        }
        this.maxId = 1;
    }

    componentDidMount() {
        const saveData = localStorage.getItem('employeesData');
        const parsedData = saveData ? JSON.parse(saveData) : [];

        this.setState({
            data: parsedData,
        });

        this.maxId = parsedData.length > 0
            ? Math.max(...parsedData.map(item => item.id)) + 1 : 1;
    }

    componentDidUpdate(_, prevState) {
        if (prevState.data !== this.state.data) {
            localStorage.setItem('employeesData', JSON.stringify(this.state.data));
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'salary':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

        return (
            <div className={styles.app}>
                <AppInfo employees={employees} increased={increased}/>
    
                <div className={styles.searchPanel}>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;

// {name: 'Полина', salary: 800, increase: false, rise: false, id: 1},
// {name: 'Денис', salary: 2000, increase: false, rise: false, id: 2},
// {name: 'Игорь', salary: 14000, increase: false, rise: false, id: 3},