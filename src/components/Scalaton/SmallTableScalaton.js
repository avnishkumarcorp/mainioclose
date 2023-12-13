import React from "react";
import Skeleton from "@mui/material/Skeleton"
import { Box } from "@mui/material"

const SmallTableScalaton = () => {
  return (
    <div>
        <Skeleton animation="wave"  width="100%" height="100" />
    <div className="scalaton-grid">
     
   
        <Box sx={{ width: 280 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
        
        <Box sx={{ width: 280 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
        
        <Box sx={{ width: 280 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>


      
    </div>
    </div>
  )
};

export default SmallTableScalaton;
