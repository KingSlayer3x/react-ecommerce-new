
export default function SignUpForm(){
    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <div style={{ maxWidth: 400, margin: "2rem auto" }}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1rem"}}>
                    <label htmlFor="">
                        Email
                        <input type="email" placeholder="you@example.com" />
                    </label>
                </div>
                <div style={{ marginBottom: "1rem"}}>
                    <label htmlFor="">
                        Password
                        <input type="password" placeholder="*********" />
                    </label>
                </div>
                <button type="submit">Create account</button>
            </form>
        </div>
    );
}