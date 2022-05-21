import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(loading || gLoading){

 return <button class="btn loading">loading</button>    

      }

    const onSubmit = data =>{
        console.log(data);

        signInWithEmailAndPassword(data.email,data.password);
    } 

    if(gUser){
        console.log(gUser);
    }

    return (
        
        <div className='flex h-screen justify-center items-center'> 
           <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


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
                           message:"password is Required"
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

                    <input className='btn text-white w-full max-w-xs btn-md'  value="login" type="submit" />

                        </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                   className="btn btn-outline">Continue with Google</button>
                </div>
                </div>
        </div>
    );
};

export default Login;