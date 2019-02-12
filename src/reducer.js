const initState = {
  hour: 0,
  minute: 0,
  second: 0
};
function inc(state) {
  var time = Object.assign({}, state);
  time.second++;
  if (time.second == 60) {
    time.second = 0;
    time.minute++;
  }
  if (time.minute == 60) {
    time.minute = 0;
    time.hour++;
  }
  if (time.hour == 24) {
    time.hour = 0;
  }
  return time;
}
function dec(time) {
  time.second--;
  if (time.second < 0) {
    time.second += 60;
    time.minute--;
  }
  if (time.minute < 0) {
    time.minute += 60;
    time.hour--;
  }
  if (time.hour < 0) {
    time.hour += 24;
  }
  return time;
}
function counterReducer(state = initState, action) {
  switch (action.type) {
    case "inc":
      return inc(state);
      break;
    case "dec":
      return dec(state);
      break;
  }
  return initState;
}
export default counterReducer;
