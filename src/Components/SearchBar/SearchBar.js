import React, { useState } from "react"
import "./SearchBar.scss"



export const SearchBar = ({onSearch}) =>{
    const [isFocused, setIsFocused] = useState(false)
    const handleFocus=()=> setIsFocused(true)
    const handleBlur=()=> setIsFocused(false)
    const handleIconClick=()=> document.querySelector(".search-input").focus()

    return (
        <div className="bar-main">
          <div className="bar-container" style={{width: isFocused && "80%"}}>
                <i className="fas fa-search" onClick={handleIconClick}></i>
                <input className="search-input"
                onChange={(event)=> onSearch(event.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
                placeholder="Search City..."/>
            </div>
            <img src="/weather-icon.png" alt="icon" className="bar-icon"/>
        </div>
      );
}