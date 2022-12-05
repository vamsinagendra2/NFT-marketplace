import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import rocket from "../assets/icons/rocket.png"
import avatar1 from "../assets/topCreators/avatar1.png"
import avatar2 from "../assets/topCreators/avatar2.png"
import avatar3 from "../assets/topCreators/avatar3.png"
import avatar4 from "../assets/topCreators/avatar4.png"
import avatar5 from "../assets/topCreators/avatar5.png"
import avatar6 from "../assets/topCreators/avatar6.png"
import avatar7 from "../assets/topCreators/avatar7.png"
import avatar8 from "../assets/topCreators/avatar8.png"
import avatar9 from "../assets/topCreators/avatar9.png"
import avatar10 from "../assets/topCreators/avatar10.png"
import avatar11 from "../assets/topCreators/avatar11.png"
import avatar12 from "../assets/topCreators/avatar12.png"
import { useEffect, useState } from "react";
import IconButton from "../baseComponents/IconButton";

const MainContainer = styled('div')(({ theme }) => ({
  width: 1050,
  height: 904,
  margin: "80px auto",
  [theme.breakpoints.down("lg")]: {
    width: 690,
    height: 464,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    width: 315,
    height: 750,
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  height: 91,
  marginTop: 80,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    height: 93
  },
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
  height: 774,
  marginTop: 60,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    height: 360
  },
  [theme.breakpoints.down("md")]: {
    height: 580,
    marginTop: 40,
  },
}));

const ImageGridComponent = styled('div')(({ theme }) => ({
  width: 240,
  height: 238,
  borderRadius: 20,
  position: "relative",
  backgroundColor: theme.palette.background.secondary,
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    width: 330,
    height: 100,
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: 120,
  margin: "20px 0px 10px 60px",
  [theme.breakpoints.down("lg")]: {
    width: 60,
    margin: 20,
  },
}));

const Profile = styled('div')(({ theme }) => ({
  width: "100%",
  height: 58,
  textAlign: "center",
  [theme.breakpoints.down("lg")]: {
    width: 210,
    height: 56,
    textAlign: "left",
    marginTop: 20
  },
}));

const ProfileTitle = styled(Heading)(({ theme }) => ({
  fontSize: 22,
  [theme.breakpoints.down("lg")]: {
    fontSize: 22
  },
}));

const ProfileCaption = styled(Caption)(({ theme }) => ({
  margin: 0,
  fontSize: 15,
  fontFamily: theme.typography.secondary,
  [theme.breakpoints.down("lg")]: {
    fontSize: 15
  },
}));

const RankingButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 20,
  width: 247,
  height: 60,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.background.tertiary}`,
  margin: 30,
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
}));
const MobileRankingButton = styled(RankingButton)(({ theme }) => ({
  width: 315,
  margin: "30px 0px",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block"
  },
}));
const Serial = styled('div')(({ theme }) => ({
  width: 30,
  height: 30,
  borderRadius: "50%",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#858584",
  position: "absolute",
  left: 20,
  top: 18,
  [theme.breakpoints.down("lg")]: {
    fontSize: 15,
    left: 13,
    top: 12,
  },
}));

function ProfileImagesGrid({ trend, ind }) {
  return (
    <ImageGridComponent>
      <Serial>{ind + 1}</Serial>
      <Image src={trend.img} />
      <Profile>
        <ProfileTitle variant="h5">{trend.title}</ProfileTitle>
        <ProfileCaption variant="body1"><span style={{ color: "#858584" }}>Total Sales: </span>{trend.caption}</ProfileCaption>
      </Profile>
    </ImageGridComponent>
  )
}

function TopCreators({ windowSize }) {

  const initTrends = [
    {
      img: avatar1,
      title: "Keepitreal",
      caption: "34.53 ETH"
    },
    {
      img: avatar2,
      title: "DigiLab",
      caption: "34.53 ETH"
    },
    {
      img: avatar3,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
    {
      img: avatar4,
      title: "DigiLab",
      caption: "34.53 ETH"
    },
    {
      img: avatar5,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
    {
      img: avatar6,
      title: "DigiLab",
      caption: "34.53 ETH"
    },
    {
      img: avatar7,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
    {
      img: avatar8,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
    {
      img: avatar9,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
    {
      img: avatar10,
      title: "DigiLab",
      caption: "Shroomie"
    },
    {
      img: avatar11,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
    {
      img: avatar12,
      title: "GravityOne",
      caption: "34.53 ETH"
    },
  ]

  const [trends, setTrends] = useState(initTrends);

  useEffect(() => {

    if (windowSize.innerWidth > 1280) {
      // 
    } else if (windowSize.innerWidth > 834) {
      initTrends.splice(6)
    } else {
      initTrends.splice(5)
    }

    setTrends(initTrends);
  }, [windowSize])

  return (
    <MainContainer>
      <HeadingContainer>
        <div>
          <Heading variant="h3">Top creators</Heading>
          <Caption variant="body1">Checkout Top Rated Creators on the NFT Marketplace</Caption>
        </div>
        <div>
          <RankingButton
            text="View Rankings"
            icon={rocket}
          />
        </div>
      </HeadingContainer>
      <ImageGrid>
        {trends?.length ? trends.map((trend, i) => (<ProfileImagesGrid key={i} trend={trend} ind={i} />)) : <></>}
      </ImageGrid>
      <div>
        <MobileRankingButton
          text="View Rankings"
        />
      </div>
    </MainContainer>
  )
}

export default TopCreators;