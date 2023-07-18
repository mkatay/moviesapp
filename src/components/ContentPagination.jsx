import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@emotion/react";
import {createTheme } from "@mui/material";

const darkTheme=createTheme({
  palette:{
    mode: "dark"
  }
  })

export const ContentPagination = ({ setPage, numOfPage = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="content-pagination">
    <ThemeProvider theme={darkTheme}>
      <Stack spacing={2}>
        <Pagination
          count={numOfPage}
          onClick={(e) => handlePageChange(e.target.textContent)}       
        />
      </Stack>
    </ThemeProvider>    
    </div>
  );
};
