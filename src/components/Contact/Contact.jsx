import css from './Contact.module.css';
import IconPhone from '../../assets/IconPhone.jsx';
import IconContact from '../../assets/IconContact.jsx';

export default function Contact({ name, number, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.infoBar}>
        <div className={css.info}>
          <IconContact />
          <span className={css.text}>{name}</span>
        </div>
        <div className={css.info}>
          <IconPhone />
          <span>{number}</span>
        </div>
      </div>
      <button type="button" className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
