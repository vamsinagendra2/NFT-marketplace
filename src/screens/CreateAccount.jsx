import { styled } from "@mui/system";
import PageShell from "../components/PageShell";
import create from "../assets/create.png"
import InputBase from "../baseComponents/InputField";
import { Typography } from "@mui/material";
import Button from "../baseComponents/Button";

const MainContent = styled('div')(({ theme }) => ({
  width: "100%",
  height: 691,
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: 375,
    height: 707,
    flexDirection: "column",
    margin: "0px auto"
  },
}));

const Image = styled('div')(({ theme }) => ({
  width: "48%",
  backgroundImage: `url(${create})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: "100%",
  [theme.breakpoints.down("md")]: {
    backgroundSize: "375px",
    width: 375,
    height: 232,
  },
}));

const FormContainer = styled('div')(({ theme }) => ({
  width: "48%",
  height: "100%",
  // border: "1px solid white",
  [theme.breakpoints.down("md")]: {
    margin: "0px auto",
    width: 325,
    padding: 25
  },
}));

const HeadingContainer = styled('div')(({ theme }) => ({
  width: 460,
  height: 146,
  marginTop: 100,
  marginBottom: 40,
  [theme.breakpoints.down("md")]: {
    width: 315,
    height: 110,
    marginTop: 20,
    marginBottom: 30,
  },
}));
const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontSize: 38
  },
}));
const Caption = styled(Typography)(({ theme }) => ({
  marginTop: 20,
  color: theme.palette.common.white,
  fontFamily: theme.typography.default,
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: 16
  },
}));
const TextInput = styled(InputBase)(({ theme }) => ({
  width: 330,
  height: 46,
  paddingTop: 8,
  display: "block",
  marginBottom: 15,
  [theme.breakpoints.down("lg")]: {
    width: 325,
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  width: 330,
  height: 46,
  marginTop: 15,
  [theme.breakpoints.down("lg")]: {
    width: 325,
  },
  [theme.breakpoints.down("md")]: {
    width: 315,
  },
}));

export default function CreateAccount() {
  return (
    <PageShell>
      <MainContent>
        <Image src={create} />
        <FormContainer>
          <HeadingContainer>
            <Heading variant="h2">Create Account</Heading>
            <Caption variant="h5">Welcome! enter your details and start creating, collecting and selling NFTs.</Caption>
          </HeadingContainer>
          <TextInput placeholder="Username"/>
          <TextInput placeholder="Email Address"/>
          <TextInput placeholder="Password"/>
          <TextInput placeholder="Confirm Password"/>
          <SignUpButton>Create account</SignUpButton>
        </FormContainer>
      </MainContent>
    </PageShell>
  )
}