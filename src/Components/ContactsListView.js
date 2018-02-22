import React from 'react';

import ContactList from './ContactList'
import AddContactForm from './AddContactForm';


class ContactsListView extends React.Component {
        state = {
            contacts: [
                {
                    id: 1,
                    firstNameLastName: 'Łukasz Sztormowski',
                    telephone: 555666777,
                    email: 'qki@qki.pl',
                    category: 'rodzina',
                },
                {
                    id: 2,
                    firstNameLastName: 'Maciej Sztormowski',
                    telephone: 223332223,
                    email: 'makec@mistrz.pl',
                    category: 'rodzina',
                }
            ]
        };

    addContact = ({ firstNameLastName, telephone, email, category }) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                firstNameLastName: firstNameLastName,
                telephone: telephone,
                email: email,
                category: category
            })
        })
    };

    removeContact = ContactId => {
        console.log(ContactId)
        this.setState({
            contacts: this.state.contacts.filter( contact => contact.id !== ContactId)


        })
    };

    render() {
        return (
            <React.Fragment>
                <AddContactForm addContact={this.addContact}/>
                <ContactList contacts={this.state.contacts} removeContact={this.removeContact}/>
            </React.Fragment>
        );
    }
}

export default ContactsListView;
