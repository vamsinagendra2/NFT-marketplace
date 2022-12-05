import { styled } from "@mui/system";
import Categories from "../components/Categories";
import DiscoverMore from "../components/Discover";
import HomeBanner from "../components/HomeBanner";
import Magic from "../components/Magic";
import PageShell from "../components/PageShell";
import TopCreators from "../components/TopCreators";
import Trending from "../components/TrendingHome";

export default function Home({ windowSize }) {
  return (
    <PageShell>
      <HomeBanner />
      <Trending windowSize={windowSize}/>
      <TopCreators windowSize={windowSize}/>
      <Categories/>
      <DiscoverMore windowSize={windowSize}/>
      <Magic/>
    </PageShell>
  )
}