import { useFormik } from 'formik';
import React from 'react'
import validations from './validations'
function Register() {
  
  const {handleSubmit,handleChange,values,errors,touched,handleBlur} = useFormik({
    initialValues: {
      registeremail: '',
      password: '',
      repassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema:validations
  });
  // console.log(formik.errors.email)
  return (
    <div className="App">
         
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="registeremail">Email</label>
                <input
                  id="registeremail"
                  name="registeremail"
                  placeholder="jane@acme.com"
                  type="registeremail"
                  onChange={handleChange}
                  value={values.registeremail}
                  onBlur={handleBlur}
                />
              {errors.registeremail && touched.registeremail &&<div>{errors.registeremail}</div>}
            </div> 
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" name="password" placeholder="Jane" onChange={handleChange} value={values.password} onBlur={handleBlur} />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>
            <div>
            <label htmlFor="repassword">Confirm Password</label>
              <input id="repassword" name="repassword" placeholder="Doe" onChange={handleChange} value={values.repassword} onBlur={handleBlur}/>
              {errors.repassword && touched.repassword &&<div>{errors.repassword}</div>}
            </div>
              <button type="submit">Submit</button>
          </form>
        
       
    </div>);
}

export default Register