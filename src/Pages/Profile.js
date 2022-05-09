import { useState } from 'react'
import Profinfo from "../Components/Profinfo"


function Profile () {
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <h2>{count}</h2>
            <button type='button' onClick={() => setCount(prevCount => prevCount + 1)} >+</button>
            <button type='button' onClick={() => setCount(prevCount => prevCount - 1)} >-</button>
            <Profinfo />
        </div>
    )
}

export default Profile