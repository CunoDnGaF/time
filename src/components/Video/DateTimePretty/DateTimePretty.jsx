import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const DateTimePretty  = function({Component, date}){
  
  dayjs.extend(relativeTime);
  const time = dayjs().to(dayjs(date));

  return (
    <Component date={time}/>
  )
}

export default DateTimePretty;