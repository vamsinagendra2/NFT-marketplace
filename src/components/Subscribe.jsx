import Button from "../baseComponents/Button";
import InputBase from "../baseComponents/InputField";
import { styled } from "@mui/system"

const InputBox = styled('div')(({ theme }) => ({
  width: 420,
  position: "relative",
  height: 60,
  marginTop: 20,
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

const InputAndButton = styled('div')(({ theme }) => ({
  width: 315,
  height: 46,
  marginTop: 20,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block"
  }
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: "100%",
  height: "100%",
  color: "black",
  paddingLeft: 20,
  borderRadius: 20,
}));

const OverlayButton = styled(Button)(({ theme }) => ({
  width: 180,
  height: "100%",
  position: "absolute",
  zIndex: 1,
  border: "bone",
  fontSize: 16,
  right: 0,
}));

const OutsideButton = styled(Button)(({ theme }) => ({
  width: 315,
  height: 46,
  marginTop: 16,
}));

function InputBoxWithButton() {
  return (
    <InputBox>
      <StyledInput placeholder="Enter your email here" />
      <OverlayButton>Subscribe</OverlayButton>
    </InputBox>
  )
}
function InputBoxAndButton() {
  return (
    <InputAndButton>
      <InputBase placeholder="Enter your email here" />
      <OutsideButton>Subscribe</OutsideButton>
    </InputAndButton>
  )
}

export {
  InputBoxWithButton,
  InputBoxAndButton
}
