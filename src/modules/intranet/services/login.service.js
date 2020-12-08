import axios from 'axios';

const LoginService = (data) => {
  console.log(data);
  return axios.post('http://localhost:3000/login', data)
    .then(res => {
      return res.data
    })
    .catch(error => {
      return error.toJSON();
    })
};

export default LoginService;
