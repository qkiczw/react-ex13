import React from 'react';

import ContactList from './ContactList'

class ContactsListView extends React.Component {
        state = {
            contacts: [
                {
                    firstNameLastName: 'Łukasz Sztormowski',
                    telephone: '555 666 777',
                    email: 'qki@qki.pl',
                    category: 'rodzina',
                }
            ]
        };

    render() {


        return (
            <React.Fragment>
                <ContactList contacts={this.state.contacts[0]}/>
            </React.Fragment>
        );
    }
}

export default ContactsListView;
