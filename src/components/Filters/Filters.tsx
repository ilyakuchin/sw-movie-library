import React, { useState } from 'react';

export interface IFiltersProps {}

export function Filters(props: IFiltersProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [beforeDate, setBeforeDate] = useState('');
  const [afterDate, setAfterDate] = useState('');

  return (
    <div>
      <div>Filter by:</div>
      <div>
        <input
          placeholder='name'
          value={searchTerm}
          onChange={(e) => {
            e.preventDefault();
            setSearchTerm(e.target.value);
          }}
        ></input>
        <label>After year</label>
        <input
          type='date'
          placeholder='after year'
          value={afterDate}
          onChange={(e) => {
            e.preventDefault();
            setAfterDate(e.target.value);
          }}
        ></input>
        <label>Before year</label>
        <input
          type='date'
          placeholder='before year'
          value={beforeDate}
          onChange={(e) => {
            e.preventDefault();
            setBeforeDate(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            setSearchTerm('');
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
