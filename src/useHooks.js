import { useContext } from "react";
import { GlobalContext } from "./useContext";

export const useHooks = () => {
  const {
    silver,
    setSilver,
    count,
    setCount,
    video,
    setVideo,
    pink,
    setPink,
    gray,
    setGray,
  } = useContext(GlobalContext);

  const addLikes = () => {
    setCount(count + 1);
  };

  const handleSilver = () => {
    setSilver(!silver);
  };

  const handlePink = () => {
    setPink(!pink);
  };

  const handleGray = () => {
    setGray(!gray);
  };

  const closeSilverPic = () => {
    setSilver(false);
  };

  const closePinkPic = () => {
    setPink(false);
  };

  const closeGrayPic = () => {
    setGray(false);
  };

  const watchVideo = () => {
    setVideo(!video);
  };

  const closeVideo = () => {
    setVideo(false);
  };

  return {
    silver,
    setSilver,
    count,
    setCount,
    addLikes,
    handleSilver,
    closeSilverPic,
    watchVideo,
    video,
    closeVideo,
    pink,
    setPink,
    handlePink,
    closePinkPic,
    handleGray,
    closeGrayPic,
  };
};
