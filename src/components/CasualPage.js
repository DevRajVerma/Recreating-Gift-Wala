import React, { useState } from 'react';
import FilterSidebar from './Casual/FilterSidebar';
import ProductGrid from './Casual/ProductGrid';
import SortingBar from './Casual/SortingBar';
import './CasualPage.css';

const CasualPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="casual-page">
      <header className="casual-header">
        <h1>Casual</h1>
      </header>
      <div className="casual-content">
        <button className="toggle-filter-button" onClick={toggleFilters}>
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <FilterSidebar show={showFilters} toggleFilters={toggleFilters} />
        <div className="main-content">
          <SortingBar />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default CasualPage;
