import {
  NAVBAR_HEIGHT_LG,
  NAVBAR_HEIGHT_MD,
  NAVBAR_HEIGHT_SM,
} from "./../components/NavBar/NavBar";
import { selector } from "recoil";
import responsiveState from "./responsiveState";

export default selector({
  key: "navbarHeightState",
  get: ({ get }) => {
    const responsive = get(responsiveState);

    if (responsive.lg) {
      return NAVBAR_HEIGHT_LG;
    }

    return responsive.md ? NAVBAR_HEIGHT_MD : NAVBAR_HEIGHT_SM;
  },
});
