import React from 'react';

import ContactList from './ContactList'
import AddContactForm from './AddContactForm';

class ContactsListView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <AddContactForm/>
                <ContactList/>
            </React.Fragment>
        );
    }
}

export default (ContactsListView);
