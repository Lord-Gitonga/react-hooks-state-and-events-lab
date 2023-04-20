import React, {useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, isFiltered] = useState('all');

  function handleCategory(event) {
    isFiltered(event.target.value);
  }

  const filteredItems = items.filter(item => {
    if (filter === 'all') {
      return true;
    } else {
      return item.category === filter;
    }
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={filter} onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>

        <ul>
          {filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

      </div>

      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
      
    </div>
  );
}

export default ShoppingList;
