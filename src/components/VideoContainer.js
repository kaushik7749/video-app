import React, {useEffect, useState} from 'react';
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  //Making an api call once
  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  };
  if(videos == null) {
    return null;
  }

  return (
    //Now I will map and pass in this video over here and we will iterate it for each video
    <div className='flex flex-wrap'>
      {videos?.map((video) => (
        <Link to={"/watch?v="+ video.id}><VideoCard key={video?.id} info={video} /></Link>
      ))}
      </div>
  );
};

export default VideoContainer;