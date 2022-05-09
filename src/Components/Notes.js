import './Notes.css'

function Notes() {
    return (
        <div className = "Note">
            <div className = "Subject">
                <br></br>
                <h1>Submit a Note</h1>
            </div>
            <div className = "Type">
                <input type="text" value="Type here..."></input>
                <br></br>
                <br></br>
                <input type="submit" value="Submit"></input>
            </div>
        </div>
    )
}

export default Notes;