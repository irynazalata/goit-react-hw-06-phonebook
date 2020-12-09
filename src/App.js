import React from 'react';
import Title from './shared/Title/Title';
import Form from './components/Form/Form';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import './App.css';

const App = () => {
  return (
    <>
      <Title title="phonebook" />
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;
