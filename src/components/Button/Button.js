import React from 'react';

export default function Button({ onLoadMore }) {
  return (
    <div className="containerButton">
      <button type="button" className="button" onClick={onLoadMore}>
        load more
      </button>
    </div>
  );
}
