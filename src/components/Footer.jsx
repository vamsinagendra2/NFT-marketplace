
import { Typography } from "@mui/material";
import { styled } from "@mui/system"
import store from "../assets/icons/store.png"
import discord from "../assets/icons/discord.png"
import instagram from "../assets/icons/instagram.png"
import twitter from "../assets/icons/twitter.png"
import youtube from "../assets/icons/youtube.png"
import { LogoContainer, LogoIcon, LogoTitle } from "./NavBar";
import { InputBoxWithButton, InputBoxAndButton } from "./Subscribe";

const FooterContainer = styled('div')(({ theme }) => ({
  width: "100%",
  height: 334,
  display: "flex",
  flexDirection: "column",
  position: "relative",
  justifyContent: "center",
  backgroundColor: theme.palette.background.secondary,
  [theme.breakpoints.down("lg")]: {
    height: 704,
  },
  [theme.breakpoints.down("md")]: {
    height: 776,
  }
}));

const LinkMainContainer = styled('div')(({ theme }) => ({
  width: 1050,
  height: 191,
  display: "flex",
  margin: "0px auto",
  [theme.breakpoints.down("lg")]: {
    width: 690,
    height: 542,
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
    height: 633,
  }
}));

const LeftLinkContainer = styled('div')(({ theme }) => ({
  width: 327,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));
const CenterLinkContainer = styled('div')(({ theme }) => ({
  width: 240,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginTop: 35
  }
}));
const RightLinkContainer = styled('div')(({ theme }) => ({
  width: 420,
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginTop: 35,
  }
}));

const FooterLogoContainer = styled(LogoContainer)(({ theme }) => ({
  margin: 0,
  [theme.breakpoints.down("md")]: {
    margin: 0
  }
}));

const LinksContainer = styled('div')(({ theme }) => ({
  width: "70%",
  marginTop: 30,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  }
}));

const IconContainer = styled('div')(({ theme }) => ({
  display: "flex",
}));

const Link = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.gray,
  fontFamily: theme.typography.default,
  marginTop: 20,
  fontSize: 15
}));

const Icon = styled('img')(({ theme }) => ({
  width: 25,
  marginRight: 10,
  marginTop: 10
}));


const StyledCopy = styled('div')(({ theme }) => ({
  minWidth: 1050,
  height: 33,
  borderTop: `1px solid #858584`,
  margin: "35px auto 0px",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    minWidth: 690,
    marginTop: 50
  },
  [theme.breakpoints.down("md")]: {
    minWidth: 315,
    marginTop: 40,
  }
}));

const CopyRight = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.gray,
  fontFamily: theme.typography.default,
  position: "absolute",
  bottom: 0
}));

export default function Footer() {

  return (
    <FooterContainer>
      <LinkMainContainer>
        <LeftLinkContainer>
          <FooterLogoContainer>
            <LogoIcon src={store} />
            <LogoTitle variant="h5">NFT Marketplace</LogoTitle>
          </FooterLogoContainer>
          <LinksContainer>
            <Link variant="body1">NFT marketplace UI created with Anima for Figma.</Link>
            <Link variant="body1">Join our community</Link>
          </LinksContainer>
          <IconContainer>
            <Icon src={discord} />
            <Icon src={youtube} />
            <Icon src={twitter} />
            <Icon src={instagram} />
          </IconContainer>
        </LeftLinkContainer>
        <CenterLinkContainer>
          <LogoTitle variant="h5">Explore</LogoTitle>
          <LinksContainer>
            <Link variant="body1">Marketplace</Link>
            <Link variant="body1">Rankings</Link>
            <Link variant="body1">Connect a wallet</Link>
          </LinksContainer>
        </CenterLinkContainer>
        <RightLinkContainer>
          <LogoTitle variant="h5">Join our weekly digest</LogoTitle>
          <LinksContainer>
            <Link variant="body1">Get exclusive promotions {"&"} updates straight to your inbox.</Link>
          </LinksContainer>
          <InputBoxWithButton />
          <InputBoxAndButton/>
        </RightLinkContainer>
      </LinkMainContainer>
      <StyledCopy>
        <CopyRight variant="caption">Ⓒ NFT Market. Use this template freely.</CopyRight>
      </StyledCopy>
    </FooterContainer>
  )
}