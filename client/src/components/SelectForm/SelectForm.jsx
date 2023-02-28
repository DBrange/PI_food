export default function SelectForm({ name, handler, optionQuantity }) {
  return (
    <select name={name} defaultValue="default" onChange={handler}>
      {optionQuantity.map((el, i) => (
        <option value={el.value} key={i}>
          {el.html}
        </option>
      ))}
    </select>
  );
}
