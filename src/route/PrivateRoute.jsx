import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {
    let auth = localStorage.getItem('auth-token')
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute