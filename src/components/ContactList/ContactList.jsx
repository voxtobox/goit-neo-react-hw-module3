import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <div className={css.list}>
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
