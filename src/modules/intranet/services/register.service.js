import axios from 'axios';

const RegisterService = (data) => {
  console.log(data);
  return axios.post('http://localhost:3000/register', data)
    .then(res => {
      return res.data
    })
    .catch(error => {
      return error.toJSON();
    })
};

export default RegisterService;
