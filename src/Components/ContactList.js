import React from 'react';
import {connect} from 'react-redux'
import {removeContact} from "../store/store"

class ContactList extends React.Component {
    render() {
    const {contacts, removeContact} = this.props;


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

// const mapStateToProps = state => {
//     return {
//         stateContacts: state.contacts
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onDeleteContact: (id) => dispatch({type: 'DELETE_CONTACT', contactId: id}),
//
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default connect(state => ({
    stateContacts: state.contacts
}), {removeContact})(ContactList)