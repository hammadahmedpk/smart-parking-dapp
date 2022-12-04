// export default Cards;
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { borders } from "@mui/system";
import { makeStyles } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const styles = makeStyles;
function Booking() {
  const cardInfo = [
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Lebron James",
      text: "THE GOAT",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Alex Caruso",
      text: "THE TRUE GOAT",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Steph Curry",
      text: "he good",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
      image:
        "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
      title: "Michael Jordan",
      text: "he is very close to goat",
    },
    {
        image:
          "https://png.pngitem.com/pimgs/s/512-5121716_hyundai-santa-fe-top-view-hd-png-download.png",
        title: "Michael Jordan",
        text: "he is very close to goat",
      },
  ];

  const renderCard = (card, index) => {
    return (
      <Grid
        container
        m="3px"
        width="60px"
        justifyContent="center"
        height="60px"
        direction="column"
        backgroundColor="white"
        border="1px dashed black"
      >
        <Grid item xs={3}>
          <Card>
            <CardMedia
              component="img"
              height="50"
              width="20"
              image={card.image}
              alt="Still to book"
            />
          </Card>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
        <Header/>
        <div className="grid" spacing={0}>
        {cardInfo.map(renderCard)}
        </div>
        <Footer/>
    </div>
  );
}
export default Booking;

