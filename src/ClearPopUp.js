export default function ClearPopUp({ onConfirmClear, onCancelClear }) {
  return (
    <div className='popup-container'>
      <div className='pop-up'>
        <h3>Clear List</h3>
        <p>All items in the list will be permanently removed.</p>
        <div className='actions'>
          <button onClick={onConfirmClear}>clear</button>
          <button onClick={onCancelClear}>cancel</button>
        </div>
      </div>
    </div>
  );
}
