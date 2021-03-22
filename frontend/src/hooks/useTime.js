/**
 * Returns the remaining time of the video
 * @param playerRef An input reference of the player from App.js
 */

const getTime = (playerRef) => {
  if (!playerRef || !playerRef.current) {
    return {
      remainingTime: "00:00",
    };
  }

  const format = (seconds) => {
    if (isNaN(seconds)) {
      return `00:00`;
    }
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const currentTime = playerRef.current.getCurrentTime();

  const duration = playerRef.current.getDuration();

  const remainingTime = duration - currentTime;

  const formattedRemTime = format(remainingTime);

  return {
    remainingTime: formattedRemTime,
  };
};

export default function useTime(playerRef) {
  return getTime(playerRef);
}
