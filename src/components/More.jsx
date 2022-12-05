import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import rocket from "../assets/icons/rocket.png"
import avatar1 from "../assets/topCreators/avatar1.png"
import home from "../assets/home.png"
import profile from "../assets/topCreators/avatar1.png"
import IconButton from "../baseComponents/IconButton";
import { useEffect, useState } from "react";

const MainContainer = styled('div')(({ theme }) => ({
  width: 1050,
  height: 1654,
  margin: "80px auto",
  [theme.breakpoints.down("lg")]: {
    width: 690,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    width: 315,
    height: 1146,
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  height: 91,
  marginTop: 80,
  display: "flex",
  justifyContent: "space-between",
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
}));

const CardContainer = styled('div')(({ theme }) => ({
  width: 330,
  height: 469,
  borderRadius: 20,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    marginTop: 20
  },
}));

const ProfileCard = styled('div')(({ theme }) => ({
  width: "100%",
  height: 469,
  overflow: "hidden",
}));

const ImageDiv = styled('div')(({ theme }) => ({
  backgroundImage: `url(${home})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: "100%",
  height: 296,
}));

const Profile = styled('div')(({ theme }) => ({
  width: "100%",
  height: 173,
  backgroundColor: theme.palette.background.secondary,
  paddingTop: 22,
}));

const ProfileTitle = styled(Heading)(({ theme }) => ({
  width: 270,
  height: 31,
  margin: "0px auto",
  fontSize: 22,
}));

const ProfileCategoryDiv = styled('div')(({ theme }) => ({
  width: 270,
  height: 24,
  display: "flex",
  alignItems: "center",
  margin: "10px auto",
}));

const ProfileCategoryImg = styled('img')(({ theme }) => ({
  width: 24,
  height: 24
}));
const ProfileCategory = styled(Caption)(({ theme }) => ({
  margin: 0,
  fontSize: 16,
  marginLeft: 12,
  fontFamily: theme.typography.secondary
}));


const ImageGrid = styled('div')(({ theme }) => ({
  height: 469,
  marginTop: 60,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    height: 966,
    marginTop: 20,
  },
}));

const RankingButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 20,
  width: 247,
  height: 60,
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.background.tertiary}`,
  [theme.breakpoints.down("lg")]: {
    width: 187
  },
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
}));
const MobileRankingButton = styled(RankingButton)(({ theme }) => ({
  margin: "50px 0px",
  display: "none",
  [theme.breakpoints.down("md")]: {
    width: 315,
    display: "block"
  },
}));

const Pricing = styled('div')(({ theme }) => ({
  width: 270,
  height: 43,
  display: "flex",
  margin: "25px auto",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: 275,
    height: 34
  },
}));

const ProfilePriceHead = styled(Typography)(({ theme }) => ({
  color: "#858584",
  fontSize: 12,
  fontFamily: theme.typography.secondary,
  [theme.breakpoints.down("lg")]: {
    fontSize: 15
  },
}));

const ProfilePrice = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontFamily: theme.typography.secondary,
  color: "white",
  [theme.breakpoints.down("lg")]: {
    fontSize: 15
  },
}));


function ProfileImagesGrid({ item }) {
  return (
    <CardContainer>
      <ProfileCard>
        <ImageDiv />
        <Profile>
          <ProfileTitle variant="h5">{item.title}</ProfileTitle>
          <ProfileCategoryDiv>
            <ProfileCategoryImg src={profile} />
            <ProfileCategory variant="body1">{item.caption}</ProfileCategory>
          </ProfileCategoryDiv>
          <Pricing>
            <div>
              <ProfilePriceHead>Price</ProfilePriceHead>
              <ProfilePrice>{item.price}</ProfilePrice>
            </div>
            <div>
              <ProfilePriceHead style={{ textAlign: "right" }}>Highest Bid</ProfilePriceHead>
              <ProfilePrice>{item.price}</ProfilePrice>
            </div>
          </Pricing>
        </Profile>
      </ProfileCard>
    </CardContainer>
  )
}

function MoreArtist({ windowSize }) {

  const initprofile = [
    {
      img: avatar1,
      title: "Distant Galaxy",
      caption: "MoonDancer",
      price: "34.53 ETH",
      high: "0.93 ETH"
    },
    {
      img: avatar1,
      title: "Distant Galaxy",
      caption: "MoonDancer",
      price: "34.53 ETH",
      high: "0.93 ETH"
    },
    {
      img: avatar1,
      title: "Distant Galaxy",
      caption: "MoonDancer",
      price: "34.53 ETH",
      high: "0.93 ETH"
    }
  ];

  const [profile, setProfile] = useState(initprofile);

  useEffect(() => {

    if (windowSize.innerWidth > 1280) {
      // 
    } else if (windowSize.innerWidth > 834) {
      initprofile.splice(2)
    } else {
      initprofile.splice(2)
    }

    setProfile(initprofile);
  }, [windowSize])

  return (
    <MainContainer>
      <HeadingContainer>
        <div>
          <Heading variant="h3">More NFTs From The Artist</Heading>
        </div>
        <div>
          <RankingButton
            text="Go To Artist Page"
            icon={rocket}
          />
        </div>
      </HeadingContainer>
      <ImageGrid>
        {profile.map((item, i) => (<ProfileImagesGrid key={i} item={item} ind={i} />))}
      </ImageGrid>
      {
        windowSize.innerWidth > 834 ? <>
          <ImageGrid>
            {profile.map((item, i) => (<ProfileImagesGrid key={i} item={item} ind={i} />))}
          </ImageGrid>
          <ImageGrid>
            {profile.map((item, i) => (<ProfileImagesGrid key={i} item={item} ind={i} />))}
          </ImageGrid>
        </> : <></>
      }
      <div>
        <MobileRankingButton
          text="See All"
        />
      </div>
    </MainContainer>
  )
}

export default MoreArtist;