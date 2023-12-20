export default function Item({ item, onDeleteItem, onTogglePackedItem }) {
  return (
    <li style={item.packed ? { textDecoration: 'line-through' } : {}}>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onTogglePackedItem(item.id)}
      ></input>
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
}
