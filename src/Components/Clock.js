import './Clock.css'

function Clock() {
    return (
        <div className = "Clock">
        <div className = "Day">
            <h3 className = "WeekDay">Monday</h3>
            <div className = "Time">
                <h1 className = "Time2">4:41</h1>
            </div>
            <div className = "Date">
                <h3>04/25/2022</h3>
            </div>
        </div>
        </div>
    )
}

export default Clock;