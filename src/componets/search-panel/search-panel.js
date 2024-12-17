import { Component } from 'react';
import styles from './search-panel.module.sass';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className={styles.search_panel}>
                <input 
                    className={styles.form_control}
                    type="text"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}

export default SearchPanel;