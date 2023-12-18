import logo from './logo.svg';
import './App.css';
import {useFormik} from 'formik'

function App() {
  function closePopup() {
    document.getElementById('popup').classList.remove('open-popup');
  }
  const formik = useFormik({
    initialValues: {
        name: '',
        emailField: '',
        pswField: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
      let popup = document.getElementById("popup");
      if (!formik.errors.name && !formik.errors.emailField && !formik.errors.pswField) {
        document.getElementById('popup').classList.add('open-popup');  
      }
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
      <div className='container'>
      <button className='btn' id="btn" type="submitBtn" >Submit</button>
      <div className='popup' id="popup">
        <img src="tick.png"></img>
        <h2>Login Successful</h2>
        <p>Your successfully submitted. Thank You!</p>
        <button type="button" onClick={closePopup}>OK</button>
      </div>
      </div>
    </form>
    </div>
  );
}

export default App;
