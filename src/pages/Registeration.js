import React, { useState } from 'react'

const Registeration = ()=> {
    const [mode, setMode] = useState("light")

    return (
        <form className={`row g-3  text-${ mode === 'dark'?'light':'dark'}`}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className={`form-control bg-${ mode === 'light'?'light':'dark'}  text-${ mode === 'dark'?'light':'dark'}`}  id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className={`form-control bg-${ mode === 'light'?'light':'dark'}  text-${ mode === 'dark'?'light':'dark'}`} id="inputPassword4" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className={`form-control bg-${ mode === 'light'?'light':'dark'}  text-${ mode === 'dark'?'light':'dark'}`} id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className={`form-control bg-${ mode === 'light'?'light':'dark'}  text-${ mode === 'dark'?'light':'dark'}`} id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className={`form-control bg-${ mode === 'light'?'light':'dark'}  text-${ mode === 'dark'?'light':'dark'}`} id="inputCity" />
            </div>
            
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className={`form-control bg-${ mode === 'light'?'light':'dark'}  text-${ mode === 'dark'?'light':'dark'}`} id="inputZip" />
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                    </label>
                </div>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </form>
    )

}

export default Registeration;
