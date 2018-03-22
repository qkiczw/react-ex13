import React from 'react';
import {connect} from 'react-redux'
import {removeContact} from "../store/store"

class ContactList extends React.Component {
    render() {

        return (
           <React.Fragment>
               <h2 className="contactListTitle">Moje Kontakty</h2>
               <ul>
                   {this.props.stateContacts.map(contact => (
                       <li className="contact" key={contact.id}>
                          <strong>{contact.firstNameLastName}</strong><br />
                           tel: {contact.telephone},
                           email: {contact.email},
                           kategoria: {`[${contact.category}]`}
                           <button className="removeContactBtn" onClick={() => this.props.removeContact(contact.id)}>Usuń</button>
                       </li>
                   ))}


               </ul>
           </React.Fragment>
        );
    }
}

export default connect(state => ({
    stateContacts: state.contacts
}), {removeContact})(ContactList)