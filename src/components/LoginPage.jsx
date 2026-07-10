import { useContext, useState } from "react";
import { AuthContext } from "../src/assets/AuthContext";

export default function LoginPage(){
    const [name, setName] = useState("");
    const {user, login} = useContext(AuthContext)
    function handleSubmit(e){
        e.preventDefault();
        if(!name.trim()) return;
        login(name);
    }
    return(
        <div style={{ padding: "0 1.5rem"}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} style={{ marginTop: "1rem"}}>
                <label htmlFor="">
                    Name
                    <input
                        type="text"
                        placeholder="Type any name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginLeft: "0.5rem"}}
                    />
                </label>
                <button type="submit" style={{ marginLeft: "0.5rem" }}>
                    Log In
                </button>
            </form>
            {user.isAuth && <p>User Logged In</p>}
        </div>
    );
}