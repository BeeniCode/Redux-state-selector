import React from 'react'
import { useSelector } from 'react-redux';

const Alert = () => {
const alert = useSelector((state)=> state.common.alert)
const show = useSelector((state)=> state.common.alert.show)
console.log('alerttttt', alert)
const captalized=(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

    return (
        <div style={{height:'50px'}}>
            {show && 
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{captalized(alert.type)}</strong> {alert.msg}
                </div>
          }
        </div>
        )
}

export default Alert;
