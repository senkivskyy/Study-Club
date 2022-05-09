import NavBar from '../Components/NavBar';
import Clock from '../Components/Clock';
import Timer from '../Components/Timer';
import Notes from '../Components/Notes'
import Footer from '../Components/Footer'
import ToDo from '../Components/ToDo';

function Home () {
    return (
        <div>
            Home
            
            
        <NavBar />
        <Clock />
        <Timer />
        <Notes />
        <ToDo />
        <Footer />
            </div>

    )
}

export default Home