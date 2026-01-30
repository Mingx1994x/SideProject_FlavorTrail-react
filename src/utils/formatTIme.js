import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-tw';
dayjs.extend(relativeTime);
dayjs.locale('zh-tw');

export function daysFromNow(date) {
  return dayjs(date).fromNow()
}

export function daysFormat() {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}