import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik';


function App() {
  const formik = useFormik({
    initialValues: {
        name: '',
        emailField: '',
        pswField: ''
    },
    onSubmit: values =>{
       // check for no errors
  if (!formik.errors.name && !formik.errors.emailField && !formik.errors.pswField) {
    // Display "Login Successful" alert
    alert("Login Successful!");
  } else {
    console.log("Form errors present!", formik.errors);
  }
      console.log('form:', values);
    },
    validate: values => {
      
      let errors= {};
      if(!values.name) errors.name = 'Required';
      if(!values.emailField) errors.emailField = 'Required';
      if(!values.pswField) errors.pswField = 'Required';
      return errors
    }

  });
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Name</div>
      <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
      <div>Email</div>
      <input type="text" id="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
      {formik.errors.emailField ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div>: null}
      <div>Password</div>
      <input type="text" id="pswField" onChange={formik.handleChange} value={formik.values.pswField}/>
      {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}
      <button className='btn' type="submitBtn" >Submit</button>
    </form>
    </div>
  );
}

export default App;
