const initial = {
  num: 5,
};
const handlers = {
  INC(s) {
    return {
      num: s.num + 1
    };
  }
};
function reducer(state, action) {
  if (handlers[action.type]) {
    return handlers[action.type](state);
  }

  return state || initial;
}

module.exports = reducer;