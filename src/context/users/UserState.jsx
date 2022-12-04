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

    const Register = async (credentials) => {
        try {
            const response = await Axios.post(`${host}/api/auth/createuser`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                fname: credentials.fname, lname: credentials.lname, email: credentials.email, password: credentials.password
            });
            const json = response.data;
            return json;
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <UserContext.Provider value={{ Login, Register }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState