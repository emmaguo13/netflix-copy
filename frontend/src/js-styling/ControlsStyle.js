import { makeStyles } from "@material-ui/core/styles";

const ControlsStyle = makeStyles({
  controlsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1,
  },

  icons: {
    color: "#FFFFFF",
  },

  volumeSlider: {
    width: 100,

    marginRight: 20,
    marginLeft: 20,
    marginTop: 5,
  },

  largeSlider: {
    display: "flex",
    direction: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: "22px",
  },
  sliderGrid: {
    root: {
      padding: 16,
      direction: "row",
      justify: "space-between",
      alignItems: "center",
    },
  },
  topGrid: {
    padding: "16",
    direction: "row",
    alignItems: "flex-start",
  },
});

export default ControlsStyle;
