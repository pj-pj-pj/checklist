import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleTogglePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePackedItem={handleTogglePackedItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>💼 PACKiFY 👜</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form
      className='add-form'
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your 👜 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option
            value={i}
            key={i}
          >
            {i}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onTogglePackedItem }) {
  return (
    <>
      <div className='list'>
        🎫 LIST 🎟️
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onTogglePackedItem={onTogglePackedItem}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item, onDeleteItem, onTogglePackedItem }) {
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

function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Don't forget to list any items 👜 for your trip!</em>
      </p>
    );

  const numItems = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedCount / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {packedPercent === 100
          ? 'You got everything! You are ready to go 🚀.'
          : `You have ${numItems} ${
              numItems === 1 ? 'item' : 'items'
            } 👜 on your list,
        and you packed ${packedCount} (${packedPercent}%) 🛫.`}
      </em>
    </footer>
  );
}

export default App;
