import dayjs from 'dayjs';

export default function formatTimeBorn(time) {
  return dayjs(time).format('MM/DD/YYYY');
}
