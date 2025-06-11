import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {

    const validEmail = "halimah@gmail.com";
    const validPassword = "halimah123";  

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    const isLoggedIn = email === validEmail && password === validPassword;

    if (isLoggedIn) {
      navigate("/");  
    } else {
      navigate("/unauthorized");  
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500 bg-[url('/Shape.png')]">
      <div className="bg-white rounded-2xl px-10 py-12 w-[400px] shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-[#202224] font-poppins mb-2">
          Login to Account
        </h2>
        <p className="text-[#20222480] text-sm text-center font-poppins mb-6">
          Please enter your email and password to continue
        </p>

        <div className="w-full mb-4">
          <label className="text-left block text-[#20222480] text-sm font-medium mb-1 font-poppins">
            Email address:
          </label>
          <input
            type="email"
            placeholder="halimah@gmail.com"
            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="w-full mb-4">
          <div className="flex justify-between items-center mb-1">
            <label className="text-[#20222480] text-sm font-medium font-poppins">
              Password:
            </label>
            <a
              href="#"
              className="text-[#20222480] text-sm font-medium font-poppins hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <input
            type="password"
            className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        <div className="w-full mb-6 flex items-center">
          <input type="checkbox" id="remember" className="mr-2 rounded border-gray-300" />
          <label htmlFor="remember" className="text-[#20222480] text-sm font-poppins">
            Remember Password
          </label>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#4880FF] hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-md transition duration-200"
        >
          Sign In
        </button>

        <div className="mt-4 text-sm font-poppins">
          <span className="text-[#20222480]">Don’t have an account? </span>
          <a href="#" className="text-blue-500 underline font-medium">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
