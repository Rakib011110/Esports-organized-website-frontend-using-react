import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/Provider/AuthProvider";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const { signin, user, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [verify, SetVerify] = useState(false);

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signin(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        console.log("User created successfully");

        navigate(from, { replace: true });

        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const onChange = (value) => {
    console.log("Captcha Value", value);
    SetVerify(true);
  };

  const passwordResetHandle = () => {
    const userEmail = user.email;
    passwordReset(userEmail)
      .then(() => {
        console.log("Password reset done");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <Helmet>
        <title>Titans Arena || LogIn</title>
      </Helmet>
      {/* Admin Login Credentials Section */}

      <div className="hero min-h-screen bg-[url('https://themedox.com/demo/mykd/assets/img/bg/area_bg02.jpg')]">
        <div className="hero-content flex-col my-20 lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <h1 className="text-5xl mb-5 mt-5 text-center font-mono font-bold text-green-500">
              Login To Titans Arena
            </h1>

            <div className=" text-white text-center">
              <p className="text-lg ">
                <span className="font-semibold">Email:</span> admin@gmail.com
              </p>
              <p className="text-lg">
                <span className="font-semibold">Password:</span> 123456
              </p>
            </div>

            <div className="flex flex-col justify-center items-center rounded-md border-green-500 border lg:p-3 -mx-1 lg:mx-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow-md rounded px-8 pt-6 pb-8 w-full">
                <div className="mb-2">
                  <label
                    className="block text-green-400 text-xl font-bold mb-2"
                    htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    className="p-3 outline-none bg-[#222222] hover:shadow-[#0b9817] shadow-inner text-white w-full rounded-md"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      Email is required.
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    className="block text-green-400 text-xl font-bold mb-2"
                    htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password", { required: true })}
                    className="p-3 mb-5 outline-none bg-[#222222] hover:shadow-[#0b9817] shadow-inner text-white w-full rounded-md"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">
                      Password is required.
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="custom-button hover:bg-green-500 py-2 px-5 w-full">
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={passwordResetHandle}
                className="text-purple-500 mt-3">
                Forget Password?
              </button>
              <div className="">
                <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center text-green-500 font-semibold">
                    Or
                  </p>
                </div>
                <div className="ml-5">
                  <SocialLogin />
                  <p className="mt-4 text-center text-green-500 flex items-center gap-3 mb-3">
                    Don't Have an Account Go To
                    <Link className="text-indigo-600" to="/register">
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <Player
              className="rounded-lg sm:w-[500px] sm:h-[500px]"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_nc1bp7st.json"></Player>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
