// 传入日期对象，将其格式化
export function formatDate(date) {
  let o = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds()
  };
  let newDate = `${o.Y}-${o.M}-${o.D}`;
  return newDate;
}
