import LoginGoogle from "../../app/components/LoginGoogle";
import { FieldValues, useForm } from "react-hook-form";
import agentTest from "../../app/api/agent";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "all",
  });

  async function submitForm(data: FieldValues) {
    try {
      await agentTest.Account.Register(data);
      navigate("/login");
      toast.success("Sign up successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex">
            <Link
              to="#"
              className="flex items-center justify-center h-7 w-fit sm:h-9 text-orange-based font-bold hover:brightness-75 "
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 md:w-5 md:h-5 text-orange-based stroke-orange-based stroke-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              Back
            </Link>
          </div>
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-1 ">
                MOTORMATE
              </p>
              <h1 className="text-3xl text-blue-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
                Sign up to <br />
                <span className="text-orange-based"> MotorMate</span>
              </h1>
            </div>

            <form
              className="form mx-auto max-w-2xl sm:flex sm:space-x-3 sm:flex-wrap p-3 bg-white border rounded-lg shadow-lg shadow-gray-100"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="flex-column md:ml-3">
                <label>First name:</label>
              </div>
              <div className="inputForm">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></path>
                  </g>
                </svg>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your first name"
                  className="input"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  error={!!errors.firstName}
                  helperText={errors?.firstName?.message as string}
                />
              </div>
              <div className="flex-column md:ml-3">
                <label>Last name:</label>
              </div>
              <div className="inputForm">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></path>
                  </g>
                </svg>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your last name"
                  className="input"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  error={!!errors.lastName}
                  helperText={errors?.lastName?.message as string}
                />
              </div>
              <div className="flex-column md:ml-3">
                <label>Username:</label>
              </div>
              <div className="inputForm">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <circle
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></circle>
                    <path
                      d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
                      stroke="#000000"
                      strokeWidth="1.5"
                    ></path>
                  </g>
                </svg>
                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your Username"
                  className="input"
                  {...register("username", {
                    required: "Username is required",
                    pattern: {
                      value: /^[a-zA-Z0-9]*$/,
                      message: "Username can only contain letters and numbers",
                    },
                  })}
                  error={!!errors.username}
                  helperText={errors?.username?.message as string}
                />
              </div>
              <div className="flex-column md:ml-3">
                <label>Email:</label>
              </div>
              <div className="inputForm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 32 32"
                  height="20"
                >
                  <g data-name="Layer 3" id="Layer_3">
                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                  </g>
                </svg>
                <TextField
                  type="email"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your Email"
                  className="input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors?.email?.message as string}
                />
              </div>
              <div className="flex-column">
                <label>Password</label>
              </div>
              <div className="inputForm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="-64 0 512 512"
                  height="20"
                >
                  <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                  <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                </svg>
                <TextField
                  type="password"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your Password"
                  className="input"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  error={!!errors.password}
                  helperText={errors?.password?.message as string}
                />
              </div>
              <div className="flex-column">
                <label>Confirm Password</label>
              </div>
              <div className="inputForm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="-64 0 512 512"
                  height="20"
                >
                  <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                  <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                </svg>
                <TextField
                  type="password"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your Confirm Password"
                  className="input"
                  {...register("passwordConfirm", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      if (watch("password") != value) {
                        return "Your password do not match";
                      }
                    },
                  })}
                  error={!!errors.passwordConfirm}
                  helperText={errors?.passwordConfirm?.message as string}
                />
              </div>
              <div className="flex-column md:ml-3">
                <label>Phone number</label>
              </div>
              <div className="inputForm">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
                <TextField
                  type="tel"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  style={{ marginTop: 0, marginBottom: 0 }}
                  sx={{
                    width: "90%",
                    padding: 0,
                    border: "none",
                    fontSize: "25px",
                    "& .MuiInputBase-root": {
                      height: "25px", // Adjusted height for mobile view
                    },
                    "@media (min-width: 1024px)": {
                      "& .MuiInputBase-root": {
                        height: "37px", // Adjusted height for computer view
                      },
                    },
                    "& .MuiOutlinedInput-input": {
                      boxShadow: "none",
                      padding: "3px 0 0 10px",
                      marginBottom: "7px",
                    },
                    "& fieldset": { border: "none" },
                  }}
                  placeholder="Your Phone Number"
                  className="input"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be 10 digits",
                    },
                  })}
                  error={!!errors.phoneNumber}
                  helperText={errors?.phoneNumber?.message as string}
                />
              </div>
              <div className="flex-row-login ">
                <div className="flex items-center justify-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 w-full"
                  >
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
              </div>
              <div className="text-left">
                <LoadingButton
                  loading={isSubmitting}
                  type="submit"
                  className="button-submit"
                  sx={{
                    margin: "20px auto 10px auto",
                    backgroundColor: "#151717",
                    border: "none",
                    color: "white",
                    fontSize: "15px",
                    fontWeight: 500,
                    borderRadius: "10px",
                    height: "40px",
                    width: "80%",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      backgroundColor: "#3c3d3d",
                    },
                    "& .MuiCircularProgress-svg": {
                      color: "white",
                    },
                  }}
                >
                  Sign Up
                </LoadingButton>
              </div>
              <p className="p">
                Already have an account? {""}
                <Link to="/login" className="span">
                  Log in
                </Link>
              </p>
              <p className="p line">Or login with</p>

              <div className="flex justify-center items-center">
                <LoginGoogle />
              </div>
            </form>

            <div className="sm:flex sm:justify-center sm:items-center text-center sm:text-left">
              <div className="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pr-5">
                <div className="flex justify-center -space-x-3">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description"
                  />
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                    <span className="text-xs font-medium leading-none text-white uppercase">
                      7k+
                    </span>
                  </span>
                </div>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-gray-200 w-32 h-px sm:w-auto sm:h-full mx-auto sm:mx-0"></div>

              <div className="pt-5 sm:pt-0 sm:pl-5">
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Trust pilot
                </div>
                <div className="text-sm text-gray-500">
                  Rated best over 37k reviews
                </div>
              </div>
            </div>
            <div
              className="hidden absolute top-2/4 left-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80"
              aria-hidden="true"
            >
              <svg
                className="w-52 h-auto"
                width="717"
                height="653"
                viewBox="0 0 717 653"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
                  fill="currentColor"
                  className="fill-gray-800 dark:fill-white"
                />
                <path
                  d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z"
                  fill="currentColor"
                  className="fill-orange-500"
                />
                <path
                  d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
                  fill="currentColor"
                  className="fill-cyan-600"
                />
              </svg>
            </div>

            <div
              className="hidden absolute top-2/4 right-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80"
              aria-hidden="true"
            >
              <svg
                className="w-72 h-auto"
                width="1115"
                height="636"
                viewBox="0 0 1115 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                  fill="currentColor"
                  className="fill-orange-500"
                />
                <path
                  d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                  fill="currentColor"
                  className="fill-cyan-600"
                />
                <path
                  d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                  fill="currentColor"
                  className="fill-gray-800 dark:fill-white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
