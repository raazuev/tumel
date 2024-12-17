import { Component } from 'react';

import styles from './employees-add-form.module.sass';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            error: ''
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;

        if (!name || !salary) {
            this.setState({ error: 'Заполните поля'});
            return;
        }

        this.props.onAdd(name, salary);
        this.setState({
            name: '',
            salary: '',
            error: ''
        });
    }

    render() {
        const {name, salary, error} = this.state;

        return (
            <div className={styles.addForm}>
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className={styles.formInner}
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder='Как его зовут?'
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input 
                        type="number" 
                        className="form-control new-post-label"
                        name="salary"
                        placeholder='З/П в $?'
                        value={salary}
                        onChange={this.onValueChange}/>
                    <button
                        className={styles.btnTest}
                        type="submit" 
                        variant="contained">
                        Добавить
                    </button>
                </form>
                {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
        );
    }
}

export default EmployeesAddForm;