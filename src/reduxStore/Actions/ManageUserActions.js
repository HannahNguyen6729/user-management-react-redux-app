import { SIGN_UP, DELETE_USER, EDIT_USER_INFO, UPDATE_USER_INFO, TURN_ON_DISABLED, TURN_OFF_DISABLED } from "../Types/ManageUserTypes";
export const signUpAction = (payload) => ({
  type: SIGN_UP,
  payload,
});
export const deleteUserAction = (payload) => ({
    type: DELETE_USER,
    payload,
})
export const editUserInfo = (payload) => ({
    type: EDIT_USER_INFO,
    payload
})
export const updateUserInfo = (payload) => ({
    type: UPDATE_USER_INFO,
    payload
})
export const turnOnDisabled = (payload) => ({
    type: TURN_ON_DISABLED,
    payload
})
export const turnOffDisabled = (payload) => ({
    type: TURN_OFF_DISABLED,
    payload
})
