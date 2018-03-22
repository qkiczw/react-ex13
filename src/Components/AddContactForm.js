import React from 'react';
import {connect} from 'react-redux'
import {addTask} from "../store/store"

const initialState  = {
    firstNameLastName: '',
    telephone: '',
    email: '',
    category: ''
}

class AddContactForm extends React.Component {
    state = initialState;

    onHandle = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const patch = {};
        patch[name] = value;

        this.setState(patch)

    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state);
        this.setState(initialState);

    };

    render() {
        const {firstNameLastName, telephone, email, category} = this.state;
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="firstNameLastName"
                    value={firstNameLastName}
                    onChange={this.onHandle}
                    placeholder="Imię i nawzwisko"
                />
                <input
                    type="text"
                    name="telephone"
                    value={telephone}
                    onChange={this.onHandle}
                    placeholder="Nr telefonu"
                />
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onHandle}
                    placeholder="Adres email"
                />
                <input
                    type="text"
                    name="category"
                    value={category}
                    onChange={this.onHandle}
                    placeholder="kategoria"
                 />
                <button className="addContactBtn" onClick={this.onHandle}>Dodaj kontakt</button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(null, {addTask})(AddContactForm);
