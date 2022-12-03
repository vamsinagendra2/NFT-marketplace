
import { styled } from "@mui/system"
import Footer from "./Footer";
import NavBar from "./NavBar";

const PageShellStyled = styled('div')(({ theme }) => ({
  width: "100%",
  height: "auto",
  // minWidth: 1350,
  backgroundColor: theme.palette.background.default
}));

export default function PageShell({ children }) {

  return (
    <PageShellStyled>
      <NavBar/>
      {children}
      <Footer/>
    </PageShellStyled>
  )
}