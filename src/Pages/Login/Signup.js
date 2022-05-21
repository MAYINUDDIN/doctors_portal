import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate();

        let SignInError;

      if( loading || gLoading||updating){

 return <Loading></Loading>    

      }

      if(error||gError||UpdateError){

      SignInError=<p className='text-red-500'>{error?.message || gError?.message || UpdateError?.message}</p>
      }
   // ============================
    const onSubmit =async data =>{   
        // console.log(data);
    await  createUserWithEmailAndPassword(data.email,data.password);
    await updateProfile({ displayName:data.nameL });
    console.log("update Done")
    navigate('/appointment');
    } 
   // ============================
    if( user||gUser){
        console.log(user,gUser);
    }


    return (
        <div className='flex h-screen justify-center items-center'> 
        <div className="card w-96 bg-base-100 shadow-xl">
             <div className="card-body">
                 <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                 <form onSubmit={handleSubmit(onSubmit)}>

                 <div class="form-control w-full max-w-xs">
                 <label class="label">
                     <span class="label-text">Name</span>
                 </label>
                 <input type="text"
                  placeholder="Your Name"
                   class="input input-bordered w-full max-w-xs"
                   {...register("name", {

                     required:{
                        value:true,
                        message:"Name is Required"
                     }
                   })}
                   />
                 <label class="label">
                 {errors.name?.type === 'required' &&   <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                 </label>
                 </div>

                 <div class="form-control w-full max-w-xs">
                 <label class="label">
                     <span class="label-text">Email</span>
                 </label>
                 <input type="email"
                  placeholder="Your Email"
                   class="input input-bordered w-full max-w-xs"
                   {...register("email", {

                     required:{
                        value:true,
                        message:"Email is Required"
                     },
                     pattern: {
                       value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                       message: 'Provide a Valid Email' 
                     }
                   })}
                   />
                 <label class="label">
                 {errors.email?.type === 'required' &&   <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                 {errors.email?.type === 'pattern' &&   <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                 </label>
                 </div>

                 <div class="form-control w-full max-w-xs">
                 <label class="label">
                     <span class="label-text">Password</span>
                 </label>
                 <input type="password"
                  placeholder="Your Password"
                   class="input input-bordered w-full max-w-xs"
                   {...register("password", {

                     required:{
                        value:true,
                        message:"Password is Required"
                     },
                     minLength: {
                       value: 6,
                       message: 'Must be 6 character or longer' 
                     }
                   })}
                   />
                 <label class="label">
                 {errors.password?.type === 'required' &&   <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                 {errors.password?.type === 'minLength' &&   <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                 </label>
                 </div>
                  {SignInError}
                 <input className='btn text-white w-full max-w-xs btn-md'  value="Sign Up" type="submit" />
                 </form>
                 <p><small>Already Have An Account? <Link className='text-primary' to='/login'>Please Login</Link></small> </p>

                 <div className="divider">OR</div>
                 <button onClick={() => signInWithGoogle()}
                className="btn btn-outline">Continue with Google</button>
             </div>
             </div>
     </div>
    );
};

export default Signup;