const initState = {
  count: 0
};
function counterReducer(state = initState, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
      break;
    case "dec":
      return { count: state.count - 1 };
      break;
  }
  return {
    count: 0
  };
}
export default counterReducer;
