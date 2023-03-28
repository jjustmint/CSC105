import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { height } from "@mui/system";

function Rightbar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ display: { xs: "none", md: "flex" } }}
    >
      <p>Lastest Photos</p>
      <Box display="flex" flexDirection="column">
        <ImageList sx={{ width: 300, height: 300 }} cols={2} rowHeight={150}>
          <ImageListItem>
            <img
              src="https://www.holidaysmart.com/sites/default/files/dailyimage/og/2022/cat-scottish-fold-day.jpg"
              alt="Image 1"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.squarespace-cdn.com/content/v1/5e8a2944d7ce562e250eb009/1629905530215-OQSYA0YSEOWQKCPKQQ4D/d-ng-ph-c-h-i-tri-u-hfDv8pW_uvs-unsplash+%281%29.jpg"
              alt="Image 2"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://dinoanimals.com/wp-content/uploads/2021/02/Scottish-Fold-13.jpg"
              alt="Image 3"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.mcleanvet.com/wp-content/uploads/sites/227/2022/03/scottish-fold-cat-owl.jpg"
              alt="Image 4"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
