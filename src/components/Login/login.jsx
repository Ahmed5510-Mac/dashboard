import React from 'react'
import './loginStyle.css'
function LoginComponent() {
  return (
        <>
            <div className="formContainer">       
            <form className="form"  >
            <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <input type="text" id='userName' className='userName' placeholder='user Name'/>
            </div>
            {/* --------------------------------------- */}
            <div className="form-group">
                <label htmlFor="Passowrd">Passowrd</label>
                <input type="text" id="Passowrd"  className='passowrd' placeholder='passowrd'/>
            </div>
                {/* <div className='error'></div> 
                <div className={style.btnLogin}>
                <button className={style.btnSubmit}  type="submit">
                Login <i className="fa-solid fa-right-to-bracket"></i></button><br />
                </div>
                <div><span>userName or password is inCorrect</span></div>  */}
          
            </form>
            </div>
        </>
  )
}

export default LoginComponent