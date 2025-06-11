export default function PageHeader() {
  return (
    <div id="pageheader-container" className="w-full flex justify-between items-start p-4">
      
      <div id="pageheader-left" className="flex flex-col">
        <h1 id="page-title" className="text-3xl font-semibold text-black text-left">Dashboard</h1>
        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2 text-gray-500 text-sm">
          <span id="breadcrumb-home">Dashboard</span>
          <span id="breadcrumb-separator">/</span>
          <span id="breadcrumb-current">Home Detail</span>
          <span id="breadcrumb-separator">/</span>
          <span id="breadcrumb-current">Home Very Detail</span>
        </div>
      </div>

      <div id="action-button" className="self-start">
        <button id="add-button" className="bg-[#00B074] text-white px-4 py-2 rounded-lg">
          Add Button
        </button>
      </div>
    </div>
  );
}
