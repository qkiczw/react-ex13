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

    addTask = ({ firstNameLastName, telephone, email, category }) => {
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

    render() {


        return (
            <React.Fragment>
                <AddContactForm addTask={this.addTask}/>
                <ContactList contacts={this.state.contacts}/>
            </React.Fragment>
        );
    }
}

export default ContactsListView;
