import React, { useState, ChangeEvent, FormEvent } from 'react';
import ellipse from '../../../assets/ellipses.png';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useGetCustomers } from '../../../react-query/QueriesAndMutations';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';


const defaultEmail = "dukaan@gmail.com";
const defaultPassword = "password";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: defaultEmail,
    password: defaultPassword
  });

  const { data } = useGetCustomers();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
   
    if (formData.email === defaultEmail && formData.password === defaultPassword) {
      localStorage.setItem("loggedin", "true");
      localStorage.setItem("username", "Aakil Tayyab"); 
      localStorage.setItem("profilePic", "https://avatars.githubusercontent.com/u/125601652?v=4");
      toast.success("Login Successfully!", {
        position: "top-center"
      });
      navigate("/admin/dashboard");
      return;
    }
  
  
    if (data) {
      const user = data.find(customer => 
        customer.email === formData.email && customer.password === formData.password
      );
  
      if (user) {
        localStorage.setItem("loggedin", "true");
        localStorage.setItem("username", user.name); 
        localStorage.setItem("profilePic", user.avatar || "url/to/default/profile.png"); 
        toast.success("Login Successfully!", {
            position: "top-center"
          });
        navigate("/admin/dashboard");
      } else {
        toast.error("Failed to login!", {
            position: "top-center"
          });
        
      }
    } else {
        toast.error("Failed to login product!", {
            position: "top-center"
          });;
    }
  };
  
  

  return (
    <div className="w-full h-screen" style={{ backgroundColor: '#0D0D0D' }}>
      <div
        className='w-full h-screen'
        style={{
          backgroundImage: `url(${ellipse})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='w-full h-full flex md:flex-row-reverse flex-col-reverse items-center md:py-0 py-6'>
          <div className='flex w-full h-full items-center justify-center flex-col gap-14'>
            <div className='flex text-white items-center gap-4'>
              <img src={logo} alt="" className='md:w-[50px] w-[40px] cursor-pointer' />
              <h1 className='md:text-6xl text-5xl font-bold'>Dukaan</h1>
            </div>
            <div className='md:w-[500px] w-full flex flex-col items-center gap-6 md:bg-[rgba(255,255,255,.07)] md:p-10 p-6 rounded-[25px] shadow-2xl md:border border-gray-600'>
              <h1 className='text-white text-[40px] font-medium text-center'>SIGN IN</h1>
              <form onSubmit={handleSubmit} autoComplete="off" className='flex flex-col gap-4 w-full '>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='E-Mail Address'
                  autoComplete="off"
                  className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]'
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Password'
                  autoComplete="off"
                  className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]'
                />
                <div className='flex items-center justify-center w-full pt-2'>
                  <button
                    type="submit"
                    className='w-full px-10 hover:shadow-none transition-all duration-300 shadow-2xl text-white text-[30px] font-medium h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t from-[#5A639C] to-[#9B86BD]'
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
