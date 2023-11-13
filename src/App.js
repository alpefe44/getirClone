import './App.css';
import Campaigns from './components/Campaigns';
import Categories from './components/Categories';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MobileApp from './components/MobileApp';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Products></Products>
      <MobileApp></MobileApp>
      <Footer></Footer>
    </>
  );
}

export default App;
