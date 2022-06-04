import './App.css';
import Footer from './components/Footer';
import HeaderContainer from './components/HeaderContainer';
import ImageGrid from './components/ImageGrid';
import Testimonials from './components/Testimonials';
import Grid from './components/Grid';

function App() {


  return (
    <div className="app">
      <HeaderContainer />
      <Grid />
      <Testimonials />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
