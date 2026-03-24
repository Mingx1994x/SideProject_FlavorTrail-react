import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
dayjs.extend(relativeTime);
dayjs.locale('zh-tw');

export function daysFromNow(date) {
  return dayjs(date).fromNow()
}

export function daysFormat(date, dateFormat = "YYYY-MM-DD HH:mm:ss") {
  const day = date == null ? dayjs() : dayjs(date);

  if (!day.isValid()) return '';
  return day.format(dateFormat)
}

export function daysStateExpired(date) {
  return dayjs().isBefore(dayjs(date))
}

export function daysStateNew(date) {
  return dayjs().diff(dayjs(date), 'day') <= 3
}

export function formatTime(expired) {
  return new Date(expired * 1000).toUTCString()
}