export const taggedTemplate = (
  strings,
  ...keys
) => {
  return (...values) => {
    let dict = values[values.length - 1] || {};
    const [ first, ...tails ] = strings;

    let result = [ first ];

    keys.forEach((key, i) => {
      let value = Number.isInteger(key) ? values[parseInt(key)] : dict[key];
      result.push(value, tails[i]);
    });

    return result.join('');
  };
};

export const createReducer =
    (initialState, handlers) => function reducer(state = initialState, action) {
      if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
      } else {
        return state
      }
    };

export const updateObject =
    (oldObject, newValues) => Object.assign({}, oldObject, newValues);