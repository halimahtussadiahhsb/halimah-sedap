import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500 bg-[url('/Shape.png')]">
      <div className="bg-white rounded-2xl px-10 py-12 w-[400px] shadow-md flex flex-col items-center">
        <img
          src="/404.png"
          alt="404 Illustration"
          className="w-48 h-48 mb-6"
        />

        <p className="text-center text-[#202224] text-lg font-semibold font-poppins mb-6">
          Looks like you’ve got lost....
        </p>

        <button
          onClick={handleBack}
          className="bg-[#4880FF] hover:bg-blue-700 text-white text-sm font-semibold py-2 px-6 rounded-md transition duration-200"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
