import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import nft from "../assets/nft.png"
import Button from "../baseComponents/Button";

const ImgContainer = styled('div')(({ theme }) => ({
  width: "100%",
  height: 640,
  backgroundImage: `url(${nft})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const MainContent = styled('div')(({ theme }) => ({
  width: 1050,
  height: 800,
  display: "flex",
  margin: "30px auto",
  [theme.breakpoints.down("lg")]: {
    width: 690,
    height: 650
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
    height: 1153
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  width: 605,
  // height: 347,
  // [theme.breakpoints.down("lg")]: {
  //   width: 330,
  //   height: 224,
  // },
  // [theme.breakpoints.down("md")]: {
  //   width: 315,
  //   height: 154,
  // },
}));
const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 600,
  fontSize: 51,
  // [theme.breakpoints.down("lg")]: {
  //   fontSize: 42
  // },
  // [theme.breakpoints.down("md")]: {
  //   fontSize: 28
  // },
}));
const Caption = styled(Typography)(({ theme }) => ({
  marginTop: 10,
  color: "#858584",
  fontFamily: theme.typography.default,
  fontWeight: 400,
  fontSize: 22,
}));

const ContentContainer = styled('div')(({ theme }) => ({
  width: 755,
  [theme.breakpoints.down("lg")]: {
    width: 375,
  },
}));

const TimerContainer = styled('div')(({ theme }) => ({
  marginTop: 76,
  width: 295,
  // minHeight: 144,
  height: 234,
  color: theme.palette.common.white,
  background: "rgba(59, 59, 59, 0.5)",
  borderRadius: 20,
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
}));

const TimerHeading = styled(Typography)(({ theme }) => ({
  margin: "30px auto 0px",
  width: 235,
  fontFamily: theme.typography.secondary,
}));

const TimerBox = styled('div')(({ theme }) => ({
  margin: "0px auto",
  width: 235,
  height: 91,
  display: "flex",
  "& > span": {
    height: 61,
    padding: 10,
    fontSize: 28
  }
}));

const Timer = styled('div')(({ theme }) => ({
  width: 53,
  height: 61,
}));

const TimeHead = styled(Typography)(({ theme }) => ({
  fontSize: 38,
  fontWeight: 700,
  opacity: 1,
  fontFamily: theme.typography.secondary,
}));
const TimeCap = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontFamily: theme.typography.secondary,
}));

const BidButton = styled(Button)(({ theme }) => ({
  width: 235,
  height: 60,
  margin: "10px 0px 0px 20px",
  fontSize: 12,
}));

const DescriptionHead = styled(Typography)(({ theme }) => ({
  color: "#858584",
  fontSize: 22,
  marginTop: 30,
  fontFamily: theme.typography.secondary
}));
const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  width: 605,
  fontSize: 22,
  marginTop: 30,
  [theme.breakpoints.down("lg")]: {
    width: 365,
  fontSize: 16,
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
  fontSize: 22,
  },
}));


function TimerComponent() {
  return (
    <TimerContainer>
      <TimerHeading>Auction ends in:</TimerHeading>
      <TimerBox>
        <Timer>
          <TimeHead>59</TimeHead>
          <TimeCap>Hours</TimeCap>
        </Timer>
        <span>:</span>
        <Timer>
          <TimeHead>59</TimeHead>
          <TimeCap>Hours</TimeCap>
        </Timer>
        <span>:</span>
        <Timer>
          <TimeHead>59</TimeHead>
          <TimeCap>Hours</TimeCap>
        </Timer>
      </TimerBox>
      <BidButton>Place Bid</BidButton>
    </TimerContainer>
  )
}

function NftContent() {
  return (
    <>
      <ImgContainer>
      </ImgContainer>
      <MainContent>
        <ContentContainer>
          <HeadingContainer>
            <Heading variant="h1">The Orbitians</Heading>
            <Caption variant="h5">Minted on Sep 30, 2022</Caption>
          </HeadingContainer>
          <DescriptionHead>Description</DescriptionHead>
          <Description>
          The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br/><br/>
There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br/><br/>They live in a metal space machines, high up in the sky and only have one foot on Earth.
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
          </Description>
        </ContentContainer>
        <TimerComponent />
      </MainContent>
    </>
  )
}

export default NftContent;