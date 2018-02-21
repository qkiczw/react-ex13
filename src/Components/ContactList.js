import React from 'react';

class ContactList extends React.Component {
    render() {
    const {contacts, removeContact} = this.props;


        return (
           <React.Fragment>
               <h2>Lista kontaktów</h2>
               <ul>
                   {contacts.map(contact => (
                       <li key={contact.id}>
                           {contact.firstNameLastName} --
                           {contact.telephone} --
                           {contact.email} --
                           {contact.category}
                           <button onClick={() => removeContact(contact.id)}>Usuń</button>
                       </li>
                   ))}


               </ul>
           </React.Fragment>
        );
    }
}

export default ContactList;
