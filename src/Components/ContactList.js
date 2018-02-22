import React from 'react';

class ContactList extends React.Component {
    render() {
    const {contacts, removeContact} = this.props;


        return (
           <React.Fragment>
               <h2 className="contactListTitle">Moje Kontakty</h2>
               <ul>
                   {contacts.map(contact => (
                       <li className="contact" key={contact.id}>
                          <strong>{contact.firstNameLastName}</strong><br />
                           tel: {contact.telephone},
                           email: {contact.email},
                           kategoria: {`[${contact.category}]`}
                           <button className="removeContactBtn" onClick={() => removeContact(contact.id)}>Usuń</button>
                       </li>
                   ))}


               </ul>
           </React.Fragment>
        );
    }
}

export default ContactList;
