import React from 'react';
import './App.css';

import ContactsListView from './Components/ContactsListView';
import AddContactForm from './Components/AddContactForm';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AddContactForm/>
        <ContactsListView />
      </React.Fragment>
    );
  }
}

export default App;
