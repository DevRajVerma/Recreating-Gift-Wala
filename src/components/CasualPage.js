import React, { useState } from 'react';
import FilterSidebar from './Casual/FilterSidebar';
import ProductGrid from './Casual/ProductGrid';
import SortingBar from './Casual/SortingBar';
import './CasualPage.css';

const CasualPage = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="casual-page">
      <header className="casual-header">
        <h1>Casual</h1>
      </header>
      <div className="casual-content">
        {/* Toggle button for mobile view */}
        <button
          className="filter-toggle-btn"
          onClick={toggleFilterVisibility}
        >
          {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
        
        {/* FilterSidebar */}
        <div
          className={`filter-sidebar ${
            isFilterVisible ? 'show' : 'hide'
          }`}
        >
          <FilterSidebar />
        </div>
        
        <div className="main-content">
          <SortingBar />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default CasualPage;
