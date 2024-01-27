import Video from "./Video/Video";

const VideoList = function({ list }) {
  return list.map(item => <Video url={item.url} date={item.date} />);
}

export default VideoList;