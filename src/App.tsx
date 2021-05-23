import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {JobListing} from "./components/JobListing";

function App() {
    return (
        <div>
            <p className='center header'>A Job Listing by Tom De Kooning.</p>
            <div className="center">
                <JobListing/>
            </div>
        </div>
    );
}

export default App;
