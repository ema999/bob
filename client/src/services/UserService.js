
class UserService {

  static getUsers() {
    
    const request = new Request(process.env.REACT_APP_API_URL + 'api/user', {
      method: 'GET'
    })
 
    return fetch(request).then(response => {
      return response.json();
    }).catch(function(error) {
        console.log('There has been a problem with Search fetch operation: ' + error.message);
    });

  }

  static addUser(data) {
    
    const request = new Request(process.env.REACT_APP_API_URL + 'api/user', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
 
    return fetch(request).then(response => {
      return response.json();
    }).catch(function(error) {
        console.log('There has been a problem with Create fetch operation: ' + error.message);
    });

  }


}

export default UserService;
