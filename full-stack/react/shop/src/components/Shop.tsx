import React, { useState, useEffect } from 'react';
import { get } from '../mockedData/fetch';

export default function Shop() {
  const [categories, setCategories] = useState<string[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [items, setItems] = useState({});

  useEffect(() => {
    if (!categories) {
      get('/categories').then((response) => {
        setCategories(response.data);
      });
    }
  });

  // if (selectedCategory && !items[selectedCategory]) {
  //   useEffect(() => {
  //     get(`/items?category=${selectedCategory}`).then((response) => {
  //       setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
  //     });
  //   });
  // }

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

