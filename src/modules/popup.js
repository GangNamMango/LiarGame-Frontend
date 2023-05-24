const POPUP = "rootReducer/POPUP";

export const popup = () => ({ type: POPUP });
const initialState = {
  PopUp : false,
};

export default function actions(state = initialState, action) {
  switch (action.type) {
    case POPUP:
        return {...state, PopUp: !state.PopUp};
    default:
      return state;
  }
}