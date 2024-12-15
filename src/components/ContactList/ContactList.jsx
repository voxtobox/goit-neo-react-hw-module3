import Contact from '../Contact/Contact';

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <div>
      {contacts.map(item => (
        <Contact
          key={item.id}
          name={item.name}
          number={item.number}
          onDelete={() => onContactDelete(item.id)}
        />
      ))}
    </div>
  );
}
