
const users = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: true
        }
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: {
          ...state.users,
          isFetching: false,
          data: action.data
        }
      }
    case 'FORM_USERS_CHANGE':
      return {
        ...state,
        form: {
          ...state.form,
          data: {...state.form.data, ...action.data}
        }
      }
    case 'FORM_USERS_CREATE_SUCCESS':
      return {
        ...state,
        form: {
          ...state.form,
          data: {}
        }
      }
    default:
      return state
  }
}


export default users
