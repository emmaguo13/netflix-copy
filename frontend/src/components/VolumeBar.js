import Slider from "@material-ui/core/Slider";
import Popover from "@material-ui/core/Popover";

const VolumeBar = (props) => {
  const {
    id,
    open,
    anchor,
    handleClose,
    onVolumeChange,
    classes,
    onSeekMouseDown,
    onVolumeSeekDown,
    muted,
    volume,
  } = props;
  return (
    <Popover
      id={id}
      open={open()}
      anchorEl={anchor}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Slider
        min={0}
        max={100}
        value={muted ? 0 : volume * 100}
        onChange={onVolumeChange}
        className={classes.volumeSlider}
        aria-labelledby="input-slider"
        onMouseDown={onSeekMouseDown}
        onChangeCommitted={onVolumeSeekDown}
      />
    </Popover>
  );
};

export default VolumeBar;
