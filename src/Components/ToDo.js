import React from 'react'
import './ToDo.css'

function ToDo() {
    return (
        <div className = "ToDo">
            <div className = "Subject1">
                <h1>To Do List</h1>
            </div>
            <div className = "Type">
                <input type="text" value="Type here..."></input>
            </div>
        </div>
    )
}

export default ToDo