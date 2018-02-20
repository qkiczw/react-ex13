import React from 'react';

class AddContactForm extends React.Component {
    state = {
        firstNameLastName: '',
        telephone: '',
        email: '',
        category: ''
    };

    onHandle = (event) => {
        const firstNameLastNameValue = event.target.firstNameLastName;
        const telephoneValue = event.target.telephone;
        const emailValue = event.target.email;
        const categoryValue = event.target.category;



        console.log(this.state.firstNameLastName, this.state.telephone);
    };

    handleSubmit = event => {
        event.preventDefault()

        console.log(this.state)
    }

    render() {
        const {firstNameLastName, telephone} = this.state;
        return (
            <React.Fragment>
                <p>Dodaj kontakt formularz</p>
                <form onSubmit={this.handleSubmit}>
                <input type="text"  value={firstNameLastName} onChange={this.onHandle} placeholder="Imię i nawzwisko"/>
                <input type="text"  value={telephone}  onChange={this.onHandle} placeholder="Nr telefonu"/>
                <input type="text"  placeholder="Adres email"/>
                <input type="text"  placeholder="Kategoria"/>
                <button onClick={this.onHandle}>Dodaj kontakt</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddContactForm;
