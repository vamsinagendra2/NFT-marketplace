import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import img1 from "../assets/category/category.png"
import img2 from "../assets/category/category1.png"
import img3 from "../assets/category/category2.png"
import img4 from "../assets/category/category3.png"
import img5 from "../assets/category/category4.png"
import img6 from "../assets/category/category5.png"
import img7 from "../assets/category/category6.png"
import img8 from "../assets/category/category7.png"
import { useEffect, useState } from "react";

const MainContainer = styled('div')(({ theme }) => ({
  width: 1050,
  height: 760,
  margin: "80px auto",
  [theme.breakpoints.down("lg")]: {
    width: 690,
    height: 560,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    width: 315,
    height: 964,
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  height: 46,
  marginTop: 80,
}));
const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 600,
  fontSize: 38,
  [theme.breakpoints.down("lg")]: {
    fontSize: 28
  },
}));

const CardContainer = styled('div')(({ theme }) => ({
  width: 240,
  height: 316,
  borderRadius: 20,
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    width: 150,
    height: 209
  },
  [theme.breakpoints.down("md")]: {
    width: 147.5
  },
}));

const ImageDiv = styled('img')(({ theme }) => ({
  height: 240,
  width: 240,
  [theme.breakpoints.down("lg")]: {
    width: 150,
    height: 142,
  },
  // [theme.breakpoints.down("md")]: {
  //   height: 206,
  // },
}));

const Category = styled('div')(({ theme }) => ({
  width: "100%",
  height: 76,
  backgroundColor: theme.palette.background.secondary,
  paddingTop: 22,
  marginTop: -5,
  [theme.breakpoints.down("lg")]: {
    height: 67,
  },
}));

const CategoryTitle = styled(Heading)(({ theme }) => ({
  width: 180,
  height: 31,
  margin: "0px auto",
  fontSize: 22,
  [theme.breakpoints.down("lg")]: {
    width: 110,
    fontSize: 16,
  },
}));

const ImageGrid = styled('div')(({ theme }) => ({
  height: 525,
  marginTop: 60,
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    height: 918,
  },
}));

function CategoryImagesGrid({ cat }) {
  return (
    <CardContainer>
      <ImageDiv src={cat.img} />
      <Category>
        <CategoryTitle variant="h5">{cat.title}</CategoryTitle>
      </Category>
    </CardContainer>
  )
}

function Categories() {

  const cat = [
    {
      img: img1,
      title: "Art",
    },
    {
      img: img2,
      title: "Collectibles",
    },
    {
      img: img3,
      title: "Music",
    },
    {
      img: img4,
      title: "Photography",
    },
    {
      img: img5,
      title: "Video",
    },
    {
      img: img6,
      title: "Utility",
    },
    {
      img: img7,
      title: "Sport",
    },
    {
      img: img8,
      title: "Virtual Worlds",
    }
  ]

  return (
    <MainContainer>
      <HeadingContainer>
        <Heading variant="h3">Trending Collection</Heading>
      </HeadingContainer>
      <ImageGrid>
        {cat.map((category, i) => (<CategoryImagesGrid key={i} cat={category} />))}
      </ImageGrid>
    </MainContainer>
  )
}

export default Categories;