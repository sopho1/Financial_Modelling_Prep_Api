import React, { ChangeEvent, JSX, useState, SyntheticEvent, FormEvent } from 'react'
import './Search.css'

interface Props {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onSearchSubmit, search,  handleSearchChange}: Props): JSX.Element => {

  return (

    <section className="search-section">
      <div className="search-container">
        <form
          className="search-form"
          onSubmit={onSearchSubmit}
        >
          <input
            className="search-input"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>

    // <div>
    //     <input placeholder='Search' value = {search} onChange={(e) => handleChange(e)}></input>            Dro yenebere nw!   Video 12
    //     <button  onClick={(e) => onclick(e)} />  
    // </div>
  )
}

export default Search