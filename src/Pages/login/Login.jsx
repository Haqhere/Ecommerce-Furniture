
import React, { useContext, useState } from 'react'
import { assets } from '../../Assets/assets'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios'
import { StoreContext } from '../../Components/Context/StoreContext'
import AdNav from '../../AdminSide/AdminCom/AdNav/AdNav'



const Login = () => {

  const {logedin,setLogedin} = useContext(StoreContext);
  
  const navigate = useNavigate();
  
  const [errorMessage, setErrorMessage] = useState('');

 

  const initialValues ={
    email:'',
    password:''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('email should be provided'),
    password: Yup.string().min(6,'Must be atleast 6 charecters').required('password should be provided')
  })



  

  const onSubmit = async (values) => {
    try {
      const response = await axios.get('http://localhost:5000/users'); // Assuming GET request is correct
      const users = response.data;
  
      const user = users.find(
        (user) => user.email === values.email && user.password === values.password
      );
  
      if (user) {
        if (user.email === 'anfazhaqu@gmail.com' && user.password === '100000') {
          console.log('Admin authenticated:', user);
          localStorage.setItem('user', JSON.stringify(user));
          setLogedin(true);
          navigate('/admin');
        } else {
          console.log('User authenticated:', user);
          localStorage.setItem('user', JSON.stringify(user));
          setLogedin(true);
          navigate('/');
        }
      } else {
        console.error('Invalid email or password');
        setErrorMessage('Invalid Email or Password');
      }
    } catch (error) {
      console.error('Error authorising user:', error);
    }
  };
  




  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (<>
     


    <div className='overflow-hidden'>
        <div className="  mt-32 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 backdrop-blur-sm"	>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
    <img className="logos mx-auto " src={assets.Logo} alt="Your Company"/><p className='text-emerald-500 font-bold text-center'>PureCraft</p>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
      
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-6"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}/>
        </div>
        {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null}
      </div>
      

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-6"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.password}/>
        </div>
        {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                ) : null}
      </div>
      
      <div className="text-red-500 text-sm">{errorMessage}</div>
    

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <Link to='/Registration'><button className="rounded-md pl-2 pr-2 ml-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</button></Link>
    </p>
  </div>
</div>
    </div>
  </>)
}

export default Login


