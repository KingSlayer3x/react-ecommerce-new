import { useContext } from "react"
import { AuthContext } from "../src/assets/AuthContext"

export default function HomePage(){
    const { user } = useContext(AuthContext)
    return (
        <div style={{ padding: "0 1.5rem"}}>
            <h1>Home</h1>
            {user ? (<p>Welcome back commander, {user.name}!</p>
        ) : (
            <p>You are not logged In, go to the login page to sign in</p>
        )}
        </div>
    )
}