import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack 
      direction= "row"
      alignItems="center" 
      p={2}
      sx={{position: 'sticky', background: '#ffffff', top:0 , justifyContent: "space-between"}}>
      <Link to="/" style={{display: "flex", alignItems: "center"}}>
        <img src="/osm-tube.png" alt="logo" height={45}/>
        <div className='osm-tube' style={{fontSize:"30px", paddingLeft:"10px", fontWeight:"bolder", fontFamily:"monospace" }} >osmTube</div>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar
