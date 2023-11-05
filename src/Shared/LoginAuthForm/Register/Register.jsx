import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { INPUT, TOGGLE } from '../../../actionHook/actionType';
import toast, { Toaster } from 'react-hot-toast';
import { useReducer, useState } from 'react';
import { initialState, reducer } from '../../../formAction/formAction';

const Register = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const location = useLocation();

  const { handleSubmit, formState: { errors } } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const imageBase64 = reader.result;
        setImagePreview(imageBase64);
        dispatch({
          type: INPUT,
          payload: { name: "image", value: imageBase64 }
        });
      });
      reader.readAsDataURL(file);
    }
  };
  const onSubmit = (data) => {
    const newUser = {
      username: state?.username,
      lastName: state?.lastName,
      email: state?.email,
      password: state?.password,
      image: state?.image,
    };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const checkUser = (existingUsers.find((u) => u));

    if (!checkUser?.email) {
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers))
    } else {
      toast.error("Already registered.");
    }

    if (!state.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success('Successfully Register in!');
    <Navigate to="/login" state={{ from: location }} replace />

    if (state?.image) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        localStorage.setItem("image", reader.result);
        const userDataWithImage = {
          ...state,
          image: reader.result,
        };
        localStorage.setItem('user', JSON.stringify(userDataWithImage));
      });
      reader.readAsDataURL(state.image);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <div className="max-w-md mx-auto p-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={(e) => dispatch({
                type: INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })}
              className="input input-bordered"
            />
            {errors.username && (
              <span className="text-red-600">{errors.username.message}</span>
            )}
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered"
              onChange={(e) => dispatch({
                type: INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered"
              onChange={(e) => dispatch({
                type: INPUT,
                payload: { name: e.target.name, value: e.target.value },
              })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected Image Preview"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            )}

            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
            
            <div className="flex items-center">
              <input id="terms" type="checkbox"
                className="checkbox"
                onClick={() => dispatch({ type: TOGGLE })}
              />
              <label htmlFor="terms"> Accept Terms and Condition ? *</label>
            </div>

            <button type="submit" className="btn btn-primary"
              disabled={!state.term}
            >
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
