import React from 'react';
import s from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <div className="containerButton">
      <button type="button" className={s.btn} onClick={onLoadMore}>
        <span className={s.btnText}>load more</span>
      </button>
    </div>
  );
}
