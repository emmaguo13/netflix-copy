import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const RatePopup = (props) => {
  const { id, open, anchor, handlePopoverClose, onPlaybackRateChange } = props;
  return (
    <Popover
      id={id}
      open={open()}
      anchorEl={anchor}
      onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <Grid container direction="column-reverse">
        {[0.5, 1, 1.5, 2].map((rate) => (
          <Button
            variant="text"
            key={rate}
            onClick={() => onPlaybackRateChange(rate)}
          >
            <Typography color="secondary">{rate}</Typography>
          </Button>
        ))}
      </Grid>
    </Popover>
  );
};

export default RatePopup;
