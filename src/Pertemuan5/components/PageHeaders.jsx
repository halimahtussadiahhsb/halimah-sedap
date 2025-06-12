export default function PageHeaders({ title, breadcrumb }) {
    return (
        <div className="px-4 py-4">
            <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
            <div className="text-sm text-gray-500">
                {breadcrumb.join(" / ")}
            </div>
        </div>
    );
}
