import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

export const ContentPagination = ({ page,setPage, numOfPage = 10 }) => {
  const handleChange = (event,p) => {
    console.log('oldal:',p);
    setPage(p);
     window.scrollTo(0, 0);
  };
  return (
    <div className="content-pagination">
    <Box p="5">
      <Pagination
        count={numOfPage}
        size="large"
        page={page}
        color="primary"
        shape="rounded"
        onChange={handleChange}
      />
      </Box>
    </div>
  );
};
