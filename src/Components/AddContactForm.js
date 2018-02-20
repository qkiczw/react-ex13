import React from 'react';

class AddContactForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>Dodaj kontakt formularz</p>
                <input type="text"  placeholder="Imię i nawzwisko"/>
                <input type="text"  placeholder="Nr telefonu"/>
                <input type="text"  placeholder="Adres email"/>
                <input type="text"  placeholder="Kategoria"/>
                <button>Dodaj kontakt</button>
            </React.Fragment>
        );
    }
}

export default AddContactForm;
