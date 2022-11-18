import React from 'react'
import TextField from "@mui/material/TextField";
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="main">
        <h1>Let's find something suitable for you</h1>
        <div className="search">
            <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth label ="Search"/>
        </div>
    
  </div>
  )
}

export default SearchBar
