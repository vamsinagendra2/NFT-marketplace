import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import IconButton from "../baseComponents/IconButton";
import rocket from "../assets/icons/rocket.png"
import home from "../assets/home.png"
import profile from "../assets/topCreators/avatar1.png"

const BannerContainer = styled('div')(({ theme }) => ({
  width: 1050,
  height: 544,
  margin: "80px auto",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    width: 690,
    height: 381,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    width: 315,
    height: 706,
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  width: 510,
  [theme.breakpoints.down("lg")]: {
    width: 330,
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
  },
}));

const CardContainer = styled('div')(({ theme }) => ({
  width: 510,
  height: 510,
  borderRadius: 20,
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    width: 330,
    height: 330
  },
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  width: 510,
  height: 347,
  [theme.breakpoints.down("lg")]: {
    width: 330,
    height: 224,
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
    height: 154,
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 600,
  fontSize: 69,
  [theme.breakpoints.down("lg")]: {
    fontSize: 42
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 28
  },
}));
const Caption = styled(Typography)(({ theme }) => ({
  marginTop: 20,
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 400,
  fontSize: 22,
  [theme.breakpoints.down("lg")]: {
    fontSize: 16
  },
}));

const StartButton = styled(IconButton)(({ theme }) => ({
  width: 224,
  height: 60,
  borderRadius: 20,
  marginTop: 30,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const StatsContainer = styled('div')(({ theme }) => ({
  height: 77,
  display: "flex",
  justifyContent: "space-between",
  marginTop: 30,
  [theme.breakpoints.down("lg")]: {
    marginTop: 20,
    height: 57,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    height: 40,
  },

}));
const Stats = styled(HeadingContainer)(({ theme }) => ({
  width: 150,
  [theme.breakpoints.down("lg")]: {
    width: 90
  },
  [theme.breakpoints.down("md")]: {
    width: 85
  },
}));
const StatsHeading = styled(Heading)(({ theme }) => ({
  fontFamily: theme.typography.secondary,
  margin: 0,
  fontSize: 22,
  [theme.breakpoints.down("lg")]: {
    fontSize: 22
  },
}));
const StatsCaption = styled(Caption)(({ theme }) => ({
  fontSize: 23,
  margin: 0,
  [theme.breakpoints.down("lg")]: {
    fontSize: 16
  },
}));

const ProfileCard = styled('div')(({ theme }) => ({
  width: "100%",
  height: 510,
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    height: 330,
  },
}));

const ImageDiv = styled('div')(({ theme }) => ({
  backgroundImage: `url(${home})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: "100%",
  height: 401,
  [theme.breakpoints.down("lg")]: {
    height: 221,
  },
  [theme.breakpoints.down("md")]: {
    height: 206,
  },
}));

const Profile = styled('div')(({ theme }) => ({
  width: "100%",
  height: 109,
  backgroundColor: theme.palette.background.secondary,
  paddingTop: 22,
  [theme.breakpoints.down("md")]: {
    height: 109,
  },
}));

const ProfileTitle = styled(Heading)(({ theme }) => ({
  width: 470,
  height: 31,
  margin: "0px auto",
  fontSize: 22,
  [theme.breakpoints.down("lg")]: {
    width: 290,
    fontSize: 22,
  },
}));

const ProfileCategoryDiv = styled('div')(({ theme }) => ({
  width: 470,
  height: 33,
  display: "flex",
  alignItems: "center",
  margin: "10px auto",
  [theme.breakpoints.down("lg")]: {
    width: 290,
  },
}));

const ProfileCategoryImg = styled('img')(({ theme }) => ({
  width: 24,
  height: 24
}));
const ProfileCategory = styled(Caption)(({ theme }) => ({
  margin: 0,
  marginLeft: 12,
  fontSize: 16
}));

const MobileProfileCard = styled(CardContainer)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    width: 315,
    height: 315,
    margin: "40px 0px",
    display: "block"
  },
}));


function HomeBanner() {
  const stats = [{
    num: "240+",
    title: "Total Sale"
  }, {
    num: "100K+",
    title: "Auctions"
  }, {
    num: "240K+",
    title: "Artists"
  }]

  return (
    <BannerContainer>
      <ContentContainer>
        <HeadingContainer>
          <Heading variant="h1">Discover Digital art {"&"} Collect NFTs</Heading>
          <Caption variant="h5">NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k NFT Artists.</Caption>
        </HeadingContainer>
        <MobileProfileCard>
          <ProfileCard>
            <ImageDiv />
            <Profile>
              <ProfileTitle variant="h5">Space Walking</ProfileTitle>
              <ProfileCategoryDiv>
                <ProfileCategoryImg src={profile} />
                <ProfileCategory variant="body1">Animakid</ProfileCategory>
              </ProfileCategoryDiv>
            </Profile>
          </ProfileCard>
        </MobileProfileCard>
        <StartButton
          text="Get Started"
          icon={rocket}
        />
        <StatsContainer>
          {
            stats.map((item, i) => (
              <Stats key={i}>
                <StatsHeading variant="h4">{item.num}</StatsHeading>
                <StatsCaption variant="h5">{item.title}</StatsCaption>
              </Stats>
            ))
          }
        </StatsContainer>
      </ContentContainer>
      <CardContainer>
        <ProfileCard>
          <ImageDiv />
          <Profile>
            <ProfileTitle variant="h5">Space Walking</ProfileTitle>
            <ProfileCategoryDiv>
              <ProfileCategoryImg src={profile} />
              <ProfileCategory variant="body1">Animakid</ProfileCategory>
            </ProfileCategoryDiv>
          </Profile>
        </ProfileCard>
      </CardContainer>
    </BannerContainer>
  )
}

export default HomeBanner;