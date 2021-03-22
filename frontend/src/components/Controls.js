import React, { forwardRef, useState, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Forward10Icon from "@material-ui/icons/Forward10";
import Replay10Icon from "@material-ui/icons/Replay10";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CommentIcon from "@material-ui/icons/Comment";
import SpeedIcon from "@material-ui/icons/Speed";
import PauseIcon from "@material-ui/icons/Pause";
import Tooltip from "@material-ui/core/Tooltip";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import FullScreenIcon from "@material-ui/icons/Fullscreen";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LargeSlider from "./LargeSlider";
import ControlsStyle from "../js-styling/ControlsStyle";
import RatePopup from "./RatePopup";
import VolumeBar from "./VolumeBar";

const useStyles = ControlsStyle;

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      remainingTime,
      onMute,
      muted,
      onVolumeSeekDown,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
    },
    ref
  ) => {
    const classes = useStyles();

    const [anchor, setAnchor] = useState(null);

    const handlePopoverOpen = (event) => {
      console.log(event.currentTarget.id);
      if (event.currentTarget.id == "playbackrate") {
        getId.current = "playbackrate-popover";
      } else if (event.currentTarget.id == "volume") {
        getId.current = "volume-popover";
      } else {
        getId.current = null;
      }
      setAnchor(event.currentTarget);
      getButton.current = event.currentTarget.id;
    };

    const handlePopoverClose = () => {
      setAnchor(null);
      getId.current = null;
    };

    const getButton = useRef(null);
    const getId = useRef(null);
    const id = getId.current;
    const openVolume = () => {
      return id == "volume-popover";
    };

    const openPlayback = () => {
      return id == "playbackrate-popover";
    };

    return (
      <div className={classes.controlsWrapper}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          style={{ padding: 16 }}
        >
          <IconButton>
            <ArrowBackIcon className={classes.icons} />
          </IconButton>
          <Grid item>
            <Typography
              variant="h5"
              style={{ color: "#fff", marginTop: "8px" }}
            >
              Back to Browse
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ padding: 16 }}
        >
          <Grid item xs={12}>
            <div className={classes.largeSlider}>
              <LargeSlider
                min={0}
                max={100}
                defaultValue={20}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
                onDuration={onDuration}
              />
              <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
                <Typography>{remainingTime}</Typography>
              </Button>
            </div>
          </Grid>

          <Grid item>
            <Grid container alignItems="center" direction="row">
              <IconButton
                className={classes.icons}
                onClick={onPlayPause}
                aria-label="play"
              >
                {playing ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayArrowIcon fontSize="large" />
                )}
              </IconButton>

              <IconButton
                className={classes.icons}
                onClick={onFastForward}
                aria-label="forward"
              >
                <Forward10Icon fontSize="large" />
              </IconButton>

              <IconButton className={classes.icons} onClick={onRewind}>
                <Replay10Icon fontSize="large" />
              </IconButton>

              <IconButton
                onClick={onMute}
                id="volume"
                onMouseEnter={handlePopoverOpen}
                className={`${classes.icons} ${classes.volumeButton}`}
              >
                {muted ? (
                  <VolumeMute fontSize="large" />
                ) : volume > 0.5 ? (
                  <VolumeUp fontSize="large" />
                ) : (
                  <VolumeDown fontSize="large" />
                )}
              </IconButton>

              <VolumeBar
                id={id}
                open={openVolume}
                anchor={anchor}
                handleClose={handlePopoverClose}
                onVolumeChange={onVolumeChange}
                classes={classes}
                onSeekMouseDown={onSeekMouseDown}
                onVolumeSeekDown={onVolumeSeekDown}
                muted={muted}
                volume={volume}
              />

              <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
                <Typography>La La Land: Cinematography</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid item>
            <IconButton className={classes.icons}>
              <HelpOutlineIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.icons}>
              <SkipNextIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.icons}>
              <LibraryBooksIcon fontSize="large" />
            </IconButton>

            <IconButton className={classes.icons}>
              <CommentIcon fontSize="large" />
            </IconButton>

            {/* this and the popover handles the changing of the playback rate, needs editing*/}
            <IconButton
              className={classes.icons}
              onClick={handlePopoverOpen}
              id="playbackrate"
            >
              <SpeedIcon fontSize="large" />
            </IconButton>

            <RatePopup
              id={id}
              open={openPlayback}
              anchor={anchor}
              handlePopoverClose={handlePopoverClose}
              onPlaybackRateChange={onPlaybackRateChange}
            />

            <IconButton
              variant="text"
              className={classes.icons}
              onClick={onToggleFullScreen}
            >
              <FullScreenIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
);

Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
  remainingTime: PropTypes.string,
};
export default Controls;
