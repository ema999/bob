
export const fetchUsersRequest = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}
export const fetchUsersSuccess = (data) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    data
  }
}
export const formUsersChange = (data) => {
  return {
    type: 'FORM_USERS_CHANGE',
    data
  }
}
export const formUsersCreateSuccess = () => {
  return {
    type: 'FORM_USERS_CREATE_SUCCESS'
  }
}


