import './App.css';
import Footer from './constants/footer/Footer';
import Header from './constants/header/Header';
import NavBar from './constants/navbar/NavBar';
import Map from './pages/map/Map';

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
      </div>
      <Map />
      <Footer />
    </>

  );
}

export default App;
