import React from 'react';

import ContactList from './ContactList'
import AddContactForm from './AddContactForm';

import {connect} from 'react-redux'


class ContactsListView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <AddContactForm addContact={this.addContact}/>
                <ContactList/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps())(ContactsListView);
