export default function Stats({ items }) {
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
