import UserContext from "./UserContext"
import Axios from "axios"
const UserState = (props) => {
    const host = import.meta.env.VITE_BACKEND_URL

    //Login user
    const Login = async (credentials) => {
        try {
            const response = await Axios.post(`${host}/api/auth/login`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                email: credentials.email, password: credentials.password
            });
            const json = response.data;
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <UserContext.Provider value={{ Login }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState