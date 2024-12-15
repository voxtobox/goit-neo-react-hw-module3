import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  const [searchQuery, setSeachQuery] = useState('');

  function handleContactAdd({ name, number }) {
    setContacts(contacts.concat({ name, number, id: nanoid() }));
  }

  function handleContactDelete(id) {
    setContacts(contacts.filter(c => c.id !== id));
  }

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleContactAdd} />
      {!!contacts.length && (
        <SearchBox value={searchQuery} onChange={setSeachQuery} />
      )}
      <ContactList
        contacts={filteredContacts}
        onContactDelete={handleContactDelete}
      />
    </div>
  );
}

export default App;
