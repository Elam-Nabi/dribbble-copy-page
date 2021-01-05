import { useContext } from "react";
import { GlobalContext } from "../context/useContext";

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
    cart,
    setCart,
   
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

  const closeCart = () => {
    setCart(!cart);
  };




  const addToCard = () => {
      const cartInfo = {
      name: "AirPods Max True Apple",
      color: "white",
      price: "699$"
    }; 
    const checkCart = cart.find((c) => c.name === cartInfo.name);
    if(checkCart) {
      console.log("You have reached your limit")
      return
    }
    setCart([...cart, cartInfo])
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
    cart, 
    setCart,
    addToCard,
    closeCart,
  };
};
