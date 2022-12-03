import { styled } from "@mui/system";
import PageShell from "../components/PageShell";

const MainContent = styled('div')(({ theme }) => ({
  width: 1280,
  height: 691,
  display: "flex",
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


export default function Home() {
  return (
    <PageShell>
      
    </PageShell>
  )
}