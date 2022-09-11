import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word;
        return  lower;
    }
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message} 
        </div>}
        </div>
    )
}

export default Alert