// src/Pertemuan5/layouts/Unauthorized.jsx
export default function Unauthorized() {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <div className="bg-white rounded-2xl px-10 py-12 w-[400px] shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-bold text-red-500">401 Unauthorized</h2>
          <p className="text-gray-500 text-sm text-center">
            You do not have permission to access this page. Please check your login credentials.
          </p>
        </div>
      </div>
    );
  }
  