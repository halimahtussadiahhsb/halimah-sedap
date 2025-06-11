import { useEffect, useState } from "react"
import axios from "axios"

export default function UserPage() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then((res) => {
                setUsers(res.data.users)
                setFilteredUsers(res.data.users)
            })
            .catch((err) => {
                setError("Gagal memuat data user")
                console.error(err)
            })
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        const term = searchTerm.toLowerCase()
        const results = users.filter(user =>
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(term) ||
            user.email.toLowerCase().includes(term) ||
            user.phone.toLowerCase().includes(term)
        )
        setFilteredUsers(results)
    }, [searchTerm, users])

    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daftar Pengguna</h2>

            <input
                type="text"
                placeholder="Cari nama, email, atau telepon..."
                className="mb-4 px-4 py-2 border border-gray-300 rounded w-full max-w-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {loading && (
                <div className="text-sm text-gray-600 mb-4">Memuat data...</div>
            )}

            {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
            )}

            {!loading && !error && (
                <div className="overflow-x-auto bg-white rounded shadow">
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 text-left">No</th>
                                <th className="px-4 py-2 text-left">Foto</th>
                                <th className="px-4 py-2 text-left">Nama Lengkap</th>
                                <th className="px-4 py-2 text-left">Email</th>
                                <th className="px-4 py-2 text-left">Telepon</th>
                                <th className="px-4 py-2 text-left">Alamat</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredUsers.map((user, index) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">
                                        <img
                                            src={user.image}
                                            alt={user.firstName}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-4 py-2">{user.firstName} {user.lastName}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.phone}</td>
                                    <td className="px-4 py-2">
                                        {user.address?.address}, {user.address?.city}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
