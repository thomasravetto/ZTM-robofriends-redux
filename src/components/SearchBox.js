import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa2 bg-light-blue" type="search" placeholder="Search Robot" onChange={searchChange}></input>
        </div>
    )
}

export default SearchBox;