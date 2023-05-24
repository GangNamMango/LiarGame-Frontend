const CHARACTERPOP = "rootReducer/CHARACTERPOP";

export const characterpop = () => ({ type: CHARACTERPOP });
const initialState = {
  CharacterPop: false,
};

export default function actions(state = initialState, action) {
  switch (action.type) {
    case CHARACTERPOP:
      return { ...state, CharacterPop: !state.CharacterPop};
    default:
      return state;
  }
}