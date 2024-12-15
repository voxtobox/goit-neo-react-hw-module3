import { useId } from 'react';

export default function SearchBox({ value, onChange }) {
  const id = useId();

  function handleOnChange(event) {
    onChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor={id}>Find contacts by name</label>
      <input id={id} value={value} onChange={handleOnChange}></input>
    </div>
  );
}
