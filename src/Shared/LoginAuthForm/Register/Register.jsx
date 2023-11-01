import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <div className="max-w-md mx-auto p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center">
              <label htmlFor="username">Username</label>
              <Controller
                name="username"
                control={control}
                rules={{ required: 'Username is required' }}
                render={({ field }) => (
                  <input
                    type="text"
                    id="username"
                    {...field}
                    className="input input-bordered"
                  />
                )}
              />
              {errors.username && (
                <span className="text-red-600">{errors.username.message}</span>
              )}
              <label htmlFor="email">Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                  <input
                    type="email"
                    id="email"
                    {...field}
                    className="input input-bordered"
                  />
                )}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}

              <label htmlFor="password">Password</label>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required' }}
                render={({ field }) => (
                  <input
                    type="password"
                    id="password"
                    {...field}
                    className="input input-bordered"
                  />
                )}
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
      <p className="mt-2">Already Member ? <Link to="/login">login</Link></p>
    </div>
  );
};

export default Register;
