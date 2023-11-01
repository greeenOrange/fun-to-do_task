import { useForm, Controller } from 'react-hook-form';

const LoginForm = ({ children }) => {
  
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-4 p-4">
    {children}
    <button
      type="submit"
      className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
  )
}

export default LoginForm