import React from 'react';

class ContactList extends React.Component {
    render() {
    const {contacts, removeContact} = this.props;


        return (
           <React.Fragment>
               <h2>Lista kontaktów</h2>
               <ul>
                   {contacts.map(contact => (
                       <li className="contact" key={contact.id}>
                           <span className="namesInput"><strong>{contact.firstNameLastName}</strong></span><br />
                           <span className="telephoneInput">tel: {contact.telephone}, </span>
                           <span className="emailInput">email: {contact.email}, </span>
                           <span className="categoryInput">kategoria: {contact.category} </span>
                           <button className="removeContactBtn" onClick={() => removeContact(contact.id)}>Usuń</button>
                       </li>
                   ))}


               </ul>
           </React.Fragment>
        );
    }
}

export default ContactList;
