import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import ClearPopUp from './ClearPopUp';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);
  const [popUpDisplay, setPopUpDisplay] = useState(false);

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

  function handleClearList() {
    if (items.length) setPopUpDisplay(true);
  }

  function handleConfirmClearList() {
    setItems([]);
    setPopUpDisplay(false);
  }

  function handleCancelClearList() {
    setPopUpDisplay(false);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePackedItem={handleTogglePackedItem}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
      {popUpDisplay && (
        <ClearPopUp
          onConfirmClear={handleConfirmClearList}
          onCancelClear={handleCancelClearList}
        />
      )}
    </div>
  );
}
