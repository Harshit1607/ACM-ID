import { Get_Home_Page, Set_Qr_Data, Set_User_Data } from "./actionTypes";

export const setUser = (name, roll, position) => ({
  type: Set_User_Data,
  payload: {name, roll, position}
})

export const setQr = (qrCodeData) => ({
  type: Set_Qr_Data,
  payload: qrCodeData,
})

export const getHome = () => ({
  type: Get_Home_Page
})
  
