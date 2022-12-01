
import { styled } from "@mui/system"
import NavBar from "./NavBar";

const PageShellStyled = styled('div')(({ theme }) => ({
  width: "100%",
  height: "auto",
  backgroundColor: theme.palette.background.default
}));

export default function PageShell({ children }) {

  return (
    <PageShellStyled>
      <NavBar/>
      {children}
    </PageShellStyled>
  )
}