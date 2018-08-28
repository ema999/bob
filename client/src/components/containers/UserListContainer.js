import { connect } from 'react-redux'
import { fetchUsersRequest, fetchUsersSuccess} from '../../actions'
import UserService from '../../services/UserService'
import UserList from '../features/UserList/UserList'

const mapStateToProps = (state) => {

  let users = state.users.users && state.users.users.data ? state.users.users.data : []
  
  return {
    data : users
  }
} 

const mapDispatchToProps = (dispatch, ownProperties) => {
  return {  
    onLoad: () => {

      dispatch(fetchUsersRequest())
      UserService.getUsers().then((response) => {
        
        dispatch(fetchUsersSuccess(response.users));
        
      }, (err) => {
        console.log('No se pudieron cargar los usuarios')
      })

    },
    
  }
}

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default UserListContainer
