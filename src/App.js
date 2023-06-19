// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Logos from './components/Logos-component/Logos';
import Whychoose from './components/Whychooseus/Whychoose';
import Howwork from './components/How-itwork/Howwork';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviwes/Reviews';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Hero/>
     <Logos/>
     <Whychoose/>
     <Howwork/>
     <Portfolio/>
     <Reviews/>
     <FAQ/>
     <Footer/>
    </div>
  );
}

export default App;
