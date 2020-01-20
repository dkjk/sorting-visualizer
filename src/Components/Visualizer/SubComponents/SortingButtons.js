import React from 'react';
import _ from 'lodash';

export const SortingButtons = ({ algorithms, normalizeString, handleSort }) => (
  <div className="sort-options">
    {_.map(algorithms, (name, index) => {
      return (
        <button
          key={index}
          type="button"
          className="btn btn-success sort-button"
          onClick={() => handleSort(name)}
        >
          {normalizeString(name)}
        </button>
      );
    })}
  </div>
);
