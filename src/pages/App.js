import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './Home';
import DetailsPage from './DetailsPage'

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home title= {"GitHub List"}/>} />
                    </Routes>
                    <Routes>
                        <Route path='/DetailsPage' element={<DetailsPage user={"https://api.github.com/users/mojombo"}/>} />
                    </Routes>
            </Router>

        </div>
    );
}

export default App;
