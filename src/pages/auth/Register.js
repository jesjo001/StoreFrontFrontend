import React, { useState } from 'react'
// import {auth} from "../../firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = () => {

    }

    const registerForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input type="email" className="form-control p4 mt4" value={email} onChange={e => setEmail(e.target.value)} autoFocus />
                <div className="d-grid gap-2">

                    <button type="submit" className="btn btn-primary btn-raised mt-4 p4">REGISTER</button>
                </div>

            </form>
        )
    }

    return (
        <div className="d-flex row justify-content-center align-items-center p-5" style={{ height: '80vh'}}>

            <div className="col-md-4 p4 ">
                <h4></h4>
                <h4 className="text-muted" >Enter email to register:</h4>
                {registerForm()}


            </div>
        </div>
    )
}

export default Register
