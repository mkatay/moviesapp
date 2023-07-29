import React from "react";
import { useState,useRef } from "react";
import TextField from "@mui/material/TextField";
import { Button, Tabs,Tab, ThemeProvider, createTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchResults } from "./SearchResults";


export const SearchPage = () => {
  const [type, setType] = useState(0);
  const [searchText,setSearchText] = useState("")
  const [fetchData,setFetchData] = useState(false)
  
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const handleChange =(event,newValue) => {
    setType(newValue)
  
  }
 const handleChangeText=(e)=>{
    setSearchText(e.target.value)
    setFetchData(false)
 }

console.log(searchText);
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px auto",maxWidth:'300px',justifyContent: "center"}}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
           onChange={handleChangeText}
          />
          <Button variant="contained" style={{ marginLeft: 10 }} onClick={()=>setFetchData(true)}>
            <SearchIcon />
          </Button>
        </div>
        <div >
        <Tabs value={type} indicatorColor="primary" textColor="primary" centered
            onChange={handleChange} 
        >
            <Tab  label="Search Movies" />
            <Tab  label="Search TV Series" />
        </Tabs>
        </div>
      </ThemeProvider>
      {fetchData && <SearchResults searchText={searchText} type={type?'tv':'movie'}/>}
      
    </div>
  );
};
