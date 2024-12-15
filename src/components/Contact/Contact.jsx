export default function Contact({ name, number, onDelete }) {
  return (
    <div>
      <div>
        <div>{name}</div>
        <div>{number}</div>
      </div>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
