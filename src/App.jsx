import './App.css';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';
import Possibility from './components/possibility/Possibility';
import SocialLogos from './components/social-logos/SocialLogos';
import WhatGPT3 from './components/whatGPT3/WhatGPT3';

function App() {
    return (
        <div className="App">
            <div className="bg-page">
                <Navbar />
                <Header />
            </div>
            <SocialLogos />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Footer />
        </div>
    );
}

export default App;
