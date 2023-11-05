import { Link, useNavigate } from 'react-router-dom';
import { useForm, } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';
import { useReducer } from 'react';
import { INPUT } from '../../../actionHook/actionType';
import { initialState, reducer } from '../../../formAction/formAction';

function Login() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const defaultCredentials = {
    email: "admin@ns.co",
    password: "1234",
  };

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();



  const onSubmit = (data) => {
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = allUsers.find(
      (u) => u.email === state.email && u.password === state.password
    );
    const checkCredentials = defaultCredentials.email === state.email && defaultCredentials.password === state.password;

    if (user || checkCredentials) {
      navigate('/');
      toast.success('Successfully logged in!');
    } else {
      toast.error('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md flex flex-col justify-center mt-4 p-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: INPUT,
                payload: { name: "email", value: e.target.value },
              })
            }
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: INPUT,
                payload: { name: "password", value: e.target.value },
              })
            }
            className="input input-bordered"
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}

          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      <p className="mt-2">New Member ? <Link to="/register">register</Link></p>
    </div>
  );
}

export default Login;
