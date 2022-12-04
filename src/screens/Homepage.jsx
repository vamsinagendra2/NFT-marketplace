import { styled } from "@mui/system";
import HomeBanner from "../components/HomeBanner";
import PageShell from "../components/PageShell";
import Trending from "../components/TrendingHome";

export default function Home({ windowSize }) {
  return (
    <PageShell>
      <HomeBanner />
      <Trending windowSize={windowSize}/>
    </PageShell>
  )
}