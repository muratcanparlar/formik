import * as yup from 'yup';

const validations = yup.object().shape({
  
     registeremail: yup.string().email('You should set a email').required('Email is required field'),
     password:yup.string().min(5,'Email field length should be minumum 5 chracter').required('Password is required field.'),
     repassword:yup.string().oneOf([yup.ref('password')],'Confirm passwrod should be same with password field.').required('Confirm password is required field.')
  });

  export default validations;