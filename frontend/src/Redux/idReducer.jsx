import { Set_User_Data, Set_Qr_Data } from "./actionTypes";

const initialState = {
  user: null,
  qrCodeData: null,
  showId: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Set_User_Data:
      return{
        ...state,
        user: action.payload
      }
    case Set_Qr_Data:
      return {
        ...state,
        qrCodeData: action.payload,
        showId: true,
      };
    default:
      return state;
  }
};

export default reducer;