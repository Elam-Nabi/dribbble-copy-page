import {useContext} from 'react';
import { GlobalContext } from './useContext';

export const useHooks = () => {
    const {  silver, setSilver, count, setCount, video, setVideo } = useContext(GlobalContext)

    const addLikes = () => {
    setCount(count + 1);
  };

  const handleSilver = () => {
    setSilver(!silver);
  };

  const closeImage = () => {
    setSilver(false);
  };

const watchVideo = () => {
  setVideo(!video);
}


    return {
        silver,
        setSilver,
        count, 
        setCount,
        addLikes,
        handleSilver,
        closeImage, 
        watchVideo
    }

}