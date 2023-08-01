import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import {NavLink,useLocation} from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles=makeStyles({
  root:{
    width:300,
    position:'fixed',
    bottom:0,
    zIndex:100,
    backgroundColor:'indigo!important',
    boxShadow: '0 -5px 5px -5px white',
  }
})

export const BottomNav=()=> {
  const classes=useStyles()

  console.log(useLocation().pathname);
  return (
    <Box sx={{display:'flex',justifyContent: 'center'}}>
      <BottomNavigation
        showLabels={true}
        value={useLocation().pathname}
        className={classes.root}
        sx={{"& .Mui-selected, .Mui-selected > svg": {color: "white" },"& svg":{color:'#b6b6b4'}
        }}
      >
        <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} 
          component={NavLink} 
          value='/'
          to='/' 
         
          />
        <BottomNavigationAction label="Movies" icon={<MovieCreationIcon />} 
          component={NavLink} 
          value='/movies'
          to='/movies' 
         
          />
        <BottomNavigationAction label="TV" icon={<ConnectedTvIcon />} 
          component={NavLink} 
          value='/series'
          to='/series'
          
         
          />
           <BottomNavigationAction label="search" icon={<SearchIcon />} 
          component={NavLink} 
          value='/search'
          to='/search'
          
         
          />
      </BottomNavigation>
    </Box>
  );
}
