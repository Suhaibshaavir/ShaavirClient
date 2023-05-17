
function Login({ loginClick }) {

    const loginHandler = (a=6) => {
        loginClick(a)
    }

    return (
        <>
            <button className="btn btn-primary" onClick={loginHandler}>Login</button>

        </>
    )
}

export default Login