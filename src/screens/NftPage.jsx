import { styled } from "@mui/system";
import MoreArtist from "../components/More";
import NftContent from "../components/NftContent";
import PageShell from "../components/PageShell";

export default function Nft({ windowSize }) {
  return (
    <PageShell>
      <NftContent/>
      <MoreArtist windowSize={windowSize}/>
    </PageShell>
  )
}