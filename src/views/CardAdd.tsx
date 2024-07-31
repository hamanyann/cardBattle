import { useState, useEffect } from 'react';

const CardAdd = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        const storedItems  = localStorage.getItem('items');
        if (storedItems ) {
         setItems(JSON.parse(storedItems));
        }else{
            setItems([]);
        }
      }, []);


    return (
        <>
            <div className='flex justify-center items-center'>
            {items}
            </div>
        </>
    );
}   

export default CardAdd