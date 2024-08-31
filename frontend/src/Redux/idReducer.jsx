import { Set_User_Data, Set_Qr_Data, Get_Home_Page } from "./actionTypes";

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
    case Get_Home_Page:
      return{
        ...state,
        user: null,
        qrCodeData: null,
        showId: false,
      }
    default:
      return state;
  }
};

export default reducer;