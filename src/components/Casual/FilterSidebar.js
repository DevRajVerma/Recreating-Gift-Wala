import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <h2>Filters</h2>
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
          {/* Add color options here */}
          <div className="color-circle red"></div>
          <div className="color-circle blue"></div>
          {/* More colors */}
        </div>
      </div>

      <div className="filter-section">
        <h3>Size</h3>
        <ul>
          <li><button>Small</button></li>
          <li><button>Medium</button></li>
          <li><button className="selected">Large</button></li>
          <li><button>X-Large</button></li>
          {/* More sizes */}
        </ul>
      </div>
    </aside>
  );
};

export default FilterSidebar;
