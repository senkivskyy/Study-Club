import './Notes.css'

function Notes() {
    return (
        <div className = "Note">
            <div className = "Subject">
                <h1>Submit a Note</h1>
            </div>
            <div className = "Type">
                <input type="text" value="Type here..."></input>
            </div>
        </div>
    )
}

export default Notes;