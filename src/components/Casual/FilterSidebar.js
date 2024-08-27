import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ show, toggleFilters }) => {
  return (
    <aside className={`filter-sidebar ${show ? 'show' : 'hidden'}`}>
      <h2>Filters</h2>
      <button className="close-filter-button" onClick={toggleFilters}>Close Filters</button>
      <div className="filter-section">
        <h3>Categories</h3>
        <ul>
          <li><input type="checkbox" id="t-shirts" /> <label htmlFor="t-shirts">T-shirts</label></li>
          <li><input type="checkbox" id="shorts" /> <label htmlFor="shorts">Shorts</label></li>
          <li><input type="checkbox" id="shirts" /> <label htmlFor="shirts">Shirts</label></li>
          <li><input type="checkbox" id="hoodie" /> <label htmlFor="hoodie">Hoodie</label></li>
          <li><input type="checkbox" id="jeans" /> <label htmlFor="jeans">Jeans</label></li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Price</h3>
        <input type="range" min="50" max="200" />
      </div>
      <div className="filter-section">
        <h3>Colors</h3>
        <div className="color-options">
          <div className="color-circle red"></div>
          <div className="color-circle blue"></div>
        </div>
      </div>
      <div className="filter-section">
        <h3>Size</h3>
        <ul>
          <li><button>Small</button></li>
          <li><button>Medium</button></li>
          <li><button className="selected">Large</button></li>
          <li><button>X-Large</button></li>
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
