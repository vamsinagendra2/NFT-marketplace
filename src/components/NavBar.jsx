
import { Typography } from "@mui/material";
import { styled } from "@mui/system"
import user from "../assets/icons/user.png"
import store from "../assets/icons/store.png"
import burger from "../assets/icons/burger.png"
import IconButton from "../baseComponents/IconButton"
import { NavLink } from "react-router-dom";

const NavBarContainer = styled('div')(({ theme }) => ({
  width: "100%",
  height: 100,
  display: "flex",
  alignItems: "center",
  position: "relative"
}));

const LogoContainer = styled('div')(({ theme }) => ({
  minWidth: 253,
  height: 32,
  display: 'flex',
  alignItems: "center",
  marginLeft: 50,
  [theme.breakpoints.down("md")]: {
    width: 183,
    height: 24,
  },
  [theme.breakpoints.down("sm")]: {
    width: 183,
    height: 32,
    marginLeft: 30,
  },
}));

const LogoIcon = styled('img')(({ theme }) => ({
  width: 32,
  height: 32,
  marginRight: 16,
  [theme.breakpoints.down("md")]: {
    width: 24,
    height: 24,
    marginRight: 9,
  }
}));

const LogoTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondary,
  color: theme.palette.common.white,
  [theme.breakpoints.down("md")]: {
    fontSize: 16
  }
}));

const LinkContainer = styled('div')(({ theme }) => ({
  height: 60,
  width: 700,
  display: "flex",
  alignItems: "center",
  marginLeft: "28%",
  [theme.breakpoints.down("lg")]: {
    display: "none"
  },
}));
const LinkDiv = styled('div')(({ theme }) => ({
  padding: "0px 30px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  marginLeft: 10,
  cursor: "pointer"
}));
const Link = styled(NavLink)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  textDecoration: "none"
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.background.tertiary,
  height: 60,
  minWidth: 152,
  marginLeft: 10,
  borderRadius: 20,
  "&:hover": {
    backgroundColor: theme.palette.background.tertiary,
  }
}));

const BurgerIcon = styled('img')(({theme})=>({
  width: 24,
  height: 24,
  position: "absolute",
  right: "25px",
  [theme.breakpoints.up("lg")]: {
    display: "none"
  },
}));


export default function NavBar() {

  const links = [{
    name: "Marketplace",
    route: "/"
  }, {
    name: "Rankings",
    route: "/"
  }, {
    name: "Connect a wallet",
    route: "/"
  }]

  return (
    <NavBarContainer>
      <LogoContainer>
        <LogoIcon src={store} />
        <LogoTitle variant="h5">NFT Marketplace</LogoTitle>
      </LogoContainer>
      <LinkContainer>
        {
          links.map((link, i) => (
            <LinkDiv key={i}>
              <Link to={link.route}>{link.name}</Link>
            </LinkDiv>
          ))
        }
        <IconButtonStyled
          icon={user}
          iconGap={12}
          text={"Sign Up"}
        />
      </LinkContainer>
      <BurgerIcon src={burger}/>
    </NavBarContainer>
  )
}