import axios from 'axios';
import { showAlert } from './alerts';

exports.signup = async (name, email, password, passwordConfirm) => {
  // console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Welcome to Ratours');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
    // console.log("it's working");
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
