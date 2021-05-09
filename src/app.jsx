import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import Header from './components/header';
import ItemCard from './components/itemCard';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBnG1HJ2t1RsCIW-56x9Rj3KV333ufSw0Q", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  
  return <VideoList videos={videos} />;
}

export default App;
