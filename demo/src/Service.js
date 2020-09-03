import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com';

  
function getUserAccount() {
    return axios.get(apiUrl + '/post/1');
  }
  function getUserPermissions() {
    return axios.get('/user/12345/permissions');
  }