import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, setMode } from '../../redux/common';

export default function Navbar() {
    const dispatch = useDispatch();
    const mode = useSelector((state)=> state.common.mode);

    const toggleMode = () => {
        if (mode === 'light') {
            dispatch(setMode('dark'))
            document.body.style.backgroundColor = mode;
            dispatch(setAlert({show: true, msg: "Dark Mode Enabled", type: "success"}));
        }
        else {
            dispatch(setMode('light'))
            document.body.style.backgroundColor = mode;
            dispatch(setAlert({show: true, msg: "Light Mode Enabled", type: "success"}));
        }
        setTimeout(()=> {
            dispatch(setAlert({show: false}));
        }, 1000)
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to ="/">CodeWithMubeen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="/Registeration">Registeration</Link>
                        </li>
                    </ul>
                    <form >
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode==='light'?'Dark':'Light'} Mode</label>

                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.prototype = {
    title: PropTypes.string,
    about: PropTypes.string
}
