import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import trend1 from "../assets/trending/trend1.png"
import trend2 from "../assets/trending/trend2.png"
import trend3 from "../assets/trending/trend3.png"
import profile from "../assets/topCreators/avatar1.png"
import { useEffect, useState } from "react";

const MainContainer = styled('div')(({ theme }) => ({
  width: 1050,
  height: 694,
  margin: "80px auto",
  [theme.breakpoints.down("lg")]: {
    width: 690,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    width: 315,
    height: 624,
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  height: 91,
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
const Caption = styled(Typography)(({ theme }) => ({
  marginTop: 10,
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 400,
  fontSize: 22,
  [theme.breakpoints.down("lg")]: {
    fontSize: 16
  },
}));

const ImageGrid = styled('div')(({ theme }) => ({
  height: 525,
  marginTop: 60,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    height: 505,
  },
}));

const ImageGridComponent = styled('div')(({ theme }) => ({
  width: 330,
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: 315,
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: "100%",
  borderRadius: 20,
}));

const SubImageContainer = styled('div')(({ theme }) => ({
  height: 100,
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  marginTop: 15,
  [theme.breakpoints.down("md")]: {
    height: 95
  },
}));

const Count = styled('div')(({ theme }) => ({
  width: "100%",
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.tertiary,
  color: theme.palette.common.white,
  fontSize: 22,
  fontWeight: 700,
  fontFamily: theme.typography.secondary,
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}));

const Profile = styled('div')(({ theme }) => ({
  width: "100%",
  height: 65,
  paddingTop: 15,
}));

const ProfileTitle = styled(Heading)(({ theme }) => ({
  fontSize: 22,
}));

const ProfileCategoryDiv = styled('div')(({ theme }) => ({
  height: 24,
  display: "flex",
  alignItems: "center",
  marginTop: "10px",
}));

const ProfileCategoryImg = styled('img')(({ theme }) => ({
  width: 24,
  height: 24
}));
const ProfileCategory = styled(Caption)(({ theme }) => ({
  margin: 0,
  marginLeft: 12
}));

function ProfileImagesGrid({trend}) {
  return (
    <ImageGridComponent>
      <Image src={trend.img} />
      <SubImageContainer>
        <Image src={trend.img} />
        <Image src={trend.img} />
        <Count>1025+</Count>
      </SubImageContainer>
      <Profile>
        <ProfileTitle variant="h5">{trend.title}</ProfileTitle>
        <ProfileCategoryDiv>
          <ProfileCategoryImg src={profile} />
          <ProfileCategory variant="body1">{trend.caption}</ProfileCategory>
        </ProfileCategoryDiv>
      </Profile>
    </ImageGridComponent>
  )
}

function Trending({ windowSize }) {

  const initTrends = [
    {
      img: trend1,
      title: "DSGN Animals",
      caption: "MrFox"
    },
    {
      img: trend2,
      title: "Magic Mushrooms",
      caption: "Shroomie"
    },
    {
      img: trend3,
      title: "Disco Machines",
      caption: "BeKind2Robots"
    }
  ]

  const [trends, setTrends] = useState(initTrends);

  useEffect(() => {
    console.log(windowSize)
    if(windowSize.innerWidth > 1280){
      // 
    }else if(windowSize.innerWidth > 834){
      initTrends.splice(2)
    }else {
      initTrends.splice(1)
    }
    console.log(initTrends);
    setTrends(initTrends);
  }, [windowSize])

  return (
    <MainContainer>
      <HeadingContainer>
        <Heading variant="h3">Trending Collection</Heading>
        <Caption variant="body1">Checkout Our Weekly Updated Trending Collection.</Caption>
      </HeadingContainer>
      <ImageGrid>
        {trends?.length ? trends.map((trend, i) => (<ProfileImagesGrid key={i} trend={trend}/>)) : <></>}
      </ImageGrid>
    </MainContainer>
  )
}

export default Trending;