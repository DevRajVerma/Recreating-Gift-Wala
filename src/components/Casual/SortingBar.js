import React from 'react';
import './SortingBar.css';

const SortingBar = () => {
  return (
    <div className="sorting-bar">
      <span>Showing 1-10 of 100 Products</span>
      <select>
        <option>Most Popular</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Rating</option>
      </select>
    </div>
  );
};

export default SortingBar;
