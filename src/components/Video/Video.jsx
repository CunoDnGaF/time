import DateTime from "./DateTime/DateTime";
import DateTimePretty from "./DateTimePretty/DateTimePretty"

const Video = function({url, date}){

  return (
    <div className="video">
        <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <DateTimePretty Component={DateTime} date={date} />
    </div>
)
}

export default Video;