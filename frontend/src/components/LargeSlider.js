import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const LargeSlider = withStyles({
    root: {
      height: 8,
      color: "#E50914"
    },
    thumb: {
      height: 24,
      width: 24,
      color: "#E50914",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
      color: "#E50914"
    },
    rail: {
      height: 8,
      borderRadius: 4,
      color: "#515151"
    },

  })(Slider);

  export default LargeSlider