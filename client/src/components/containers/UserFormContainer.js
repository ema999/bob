import { connect } from 'react-redux'
import { formUsersChange, formUsersCreateSuccess} from '../../actions'
import UserService from '../../services/UserService'
import UsersFormAdd from '../features/UsersFormAdd/UsersFormAdd'

const mapStateToProps = (state) => {

  let data = state.users.form && state.users.form.data ? state.users.form.data : []
  
  return {
    data
  }
} 

const mapDispatchToProps = (dispatch, ownProperties) => {
  return {  
    onSubmit: (data) => {
     
      UserService.addUser(data).then((response)=>{
        if(response) {
          alert('Usuario creado');
          dispatch(formUsersCreateSuccess());
        }
      });

    },
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' || target.type === 'select' ? target.checked : target.value;
      const name = target.name;
      
      dispatch(formUsersChange({[name]: value}));
    },
    handleBagChange(bag) {
      dispatch(formUsersChange({bags: bag}));
    }
    
  }
}

const UserFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersFormAdd)

export default UserFormContainer
