import { useState } from 'react'
import { submitRegister, submitLogin } from '../actions/actionBrewer'
import { connect } from 'react-redux'


function Verify(props){

    const [register, setRegister] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const toggleRegister = () => setRegister(!register)

    const handleSubmit = (e) => {
        e.preventDefault()
        register ? props.submitRegister({username, email, password}) : props.submitLogin({username, password})
    }

    return <>
        {register ? <h1>Register</h1> : <h1>Login</h1>}
        <form onSubmit={handleSubmit}>
            <label>Username: <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/></label><br/><br/>
            {register && <label>Email: <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>}<br/><br/>
            <label>Password: <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label><br/><br/>
        </form><br/>
        <button onClick={toggleRegister}>Or... {register? "Login" : "Register"}</button>
    </>
}

export default connect(null, {submitRegister, submitLogin})(Verify);