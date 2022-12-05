import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import trend1 from "../assets/trending/trend3.png"
import profile from "../assets/topCreators/avatar1.png"
import rocket from "../assets/icons/eye.png"
import IconButton from "../baseComponents/IconButton";
import { useState } from "react";

const MainContainer = styled('div')(({ theme }) => ({
  width: "100%",
  height: 640,
  backgroundImage: `url(${trend1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down("lg")]: {
    // display: "none"
  },
}));

const BackGround = styled('div')(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)",
  position: "relative",
  display: "inline-block"
}));

const ProfileCategoryDiv = styled('div')(({ theme }) => ({
  width: 151,
  height: 44,
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.secondary,
}));

const ProfileCategoryImg = styled('img')(({ theme }) => ({
  width: 24,
  height: 24
}));
const ProfileCategory = styled(Typography)(({ theme }) => ({
  marginTop: 20,
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 400,
  margin: 0,
  marginLeft: 12,
  fontSize: 16,
}));

const ContainerDiv = styled('div')(({ theme }) => ({
  width: 1050,
  height: 220,
  display: "flex",
  margin: "360px auto",
  [theme.breakpoints.down("lg")]: {
    width: 670,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginTop: 120,
    width: 315,
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  width: 755,
  [theme.breakpoints.down("lg")]: {
    width: 375,
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  fontSize: 51,
  color: theme.palette.common.white,
  fontWeight: 700,
  fontFamily: theme.typography.default,
  marginTop: 10,
  [theme.breakpoints.down("lg")]: {
    fontSize: 38
  },
}));

const SeeButton = styled(IconButton)(({ theme }) => ({
  width: 198,
  height: 60,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.common.black,
  borderRadius: 20,
  fontSize: 16,
  marginTop: 20
}));

const TimerContainer = styled('div')(({ theme }) => ({
  marginTop: 76,
  width: 295,
  minHeight: 144,
  color: theme.palette.common.white,
  background: "rgba(59, 59, 59, 0.5)",
  borderRadius: 20,
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    marginTop: 60,
    // height: 244,
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
  height: 61,
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
    </TimerContainer>
  )
}

function Magic() {
  return (
    <MainContainer>
      <BackGround>
        <ContainerDiv>
          <div>
            <ProfileCategoryDiv>
              <ProfileCategoryImg src={profile} />
              <ProfileCategory variant="body1">Animakid</ProfileCategory>
            </ProfileCategoryDiv>
            <ContentContainer>
              <MainHeading >Magic Mashrooms</MainHeading>
              <SeeButton
                text="See Button"
                icon={rocket}
              />
            </ContentContainer>
          </div>
          <TimerComponent />
        </ContainerDiv>
      </BackGround>
    </MainContainer>
  )
}

export default Magic;