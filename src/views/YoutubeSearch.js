import "./YoutubeSearch.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import Iframe from "react-iframe";

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  //   useEffect(() => {}, []);
  const handleSearchYoutube = async () => {
    let response = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "5",
        key: "AIzaSyCEr4hItzaSDctB_G4ZrLT9S8Xw5UEd7w8",
        type: "video",
        q: query,
      },
    });
    if (response && response.data && response.data.items) {
      let rawData = response.data.items;
      let result = [];
      if (rawData && rawData.length > 0) {
        rawData.forEach((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = moment(item.snippet.publishedAt).format(
            "DD-MM-YYYY hh:mm:ss A"
          );
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
        setVideos(result);
      }
    }
    console.log(">>> chrck res youtube: ", response);
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>
      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <Iframe
                  className="yt-iframe"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></Iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="create-at"></div>
                Created At: {item.createdAt}
                <div className="author"></div>
                Author: {item.author}
                <div className="description"></div>
                {item.description}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default YoutubeSearch;
