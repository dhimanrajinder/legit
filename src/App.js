
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Footer from '../src/components/Footer/footer';
import Header from '../src/components/Header/header';
import Middle from '../src/components/MiddleSection/middleSection';

function App() {
  return (
    <div className="App">
      <Header />
      <ParallaxProvider>
      <Middle />
      </ParallaxProvider>
      <Footer />
    </div>
  );
}

export default App;
