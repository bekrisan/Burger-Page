import './login.css';

function loginPage() {

return (
    <div className="login-container">
        <h1>Khaan burger</h1>
        <div className="login-box">
            <h2>Login</h2>
            <p>Flavor That Brings Pleasure.</p>
        </div>
        <input className='username'
            type="text"
            placeholder="Username"></input>
        <input className='password'
            type="password"
            placeholder="Password"></input>
        <button className='login-button' >Login</button>
        <button className='sign-up'>Sign up</button>
    </div>
    );
}
    export default loginPage;