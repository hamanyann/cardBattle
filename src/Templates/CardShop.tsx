// import { useState, useEffect } from 'react';



// const CardShop = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     localStorage.setItem('items', JSON.stringify(items));
//   }, [items]);

//   useEffect(() => {
//     const storedItems = localStorage.getItem('items');
//     if (storedItems) {
//       setItems(JSON.parse(storedItems));
//     } else {
//       setItems([]);
//     }
//   }, []);

//   const handleAddItem = () => {
//     setItems(prevItems => [...prevItems, { name: 'test', id: 1 }]);
//   };

//   return (
//     <>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleAddItem}
//       >
//         CardAdd
//       </button>
     
//       <div>
//       {items.map((item, index) => (
//           <div key={index}>{item.name}</div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CardShop;
