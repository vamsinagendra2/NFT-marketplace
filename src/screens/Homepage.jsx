import { styled } from "@mui/system";
import HomeBanner from "../components/HomeBanner";
import PageShell from "../components/PageShell";

export default function Home({ windowSize }) {
  return (
    <PageShell>
      <HomeBanner windowSize={windowSize}/>
    </PageShell>
  )
}