import React from 'react';
import './App.css';

import ContactsListView from './Components/ContactsListView';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ContactsListView />
      </React.Fragment>
    );
  }
}

export default App;
