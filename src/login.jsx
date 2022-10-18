import './login.css';

function login() {
    return (
    <div style={{width:'300px',height:'450px',position:"absolute",top:"100px",left:"625px",boxShadow:"20px 1px 50px grey" }}>
        <h1 style={{position:"absolute",top:"30px",left:"30px"}}>Sign In</h1>
        <br />
        <label style={{position:"absolute",top:"140px",left:"40px"}}>Username</label>
        <input  style={{position:"absolute",top:"170px",left:"40px"}}type="text" />
        <br />
        <label  style={{position:"absolute",top:"240px",left:"40px"}}>Password</label>
        <input style={{position:"absolute",top:"270px",left:"40px"}} type="text" />

        <button type="submit">Submit</button>
    </div>
    
    );
}

export default login;