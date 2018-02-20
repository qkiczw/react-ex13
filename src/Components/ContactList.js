import React from 'react';

class ContactList extends React.Component {
    render() {
    const {contacts} = this.props;

        return (
           <React.Fragment>
               <p>Tu będzie lista kontaktów</p>
               <ul>
                   <li>{contacts.firstNameLastName}</li>
               </ul>
           </React.Fragment>
        );
    }
}

export default ContactList;
