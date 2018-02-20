import React from 'react';

import ContactList from './ContactList'

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

    render() {


        return (
            <React.Fragment>
                <ContactList contacts={this.state.contacts}/>
            </React.Fragment>
        );
    }
}

export default ContactsListView;
