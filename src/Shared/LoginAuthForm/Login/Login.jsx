import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm';
import { useForm, } from "react-hook-form"

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md flex flex-col justify-center mt-4 p-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
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
