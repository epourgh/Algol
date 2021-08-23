const initialState = []

export default function searchedReducer(state = initialState, action) {
  switch (action.type) {
    case 'searched/addToList': {
        let payload = action.payload;
        return [...state, payload ];
    }
    default:
      return state
  }
}
