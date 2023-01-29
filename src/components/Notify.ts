import { toast } from 'react-toastify';

export const Notify=(x:string)=>{
  if(x==="success"){
    return toast.success('Login Success' ,{
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  if(x==="error"){
    return toast.error('Either your password or login is incorrect', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

}