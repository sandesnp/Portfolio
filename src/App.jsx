import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Testinomnials from './sections/Testinomnials';
import Works from './sections/Works';

function App() {
  return (
    <div className='app d-flex flex-column'>
      <Hero />
      <Works />
      <Skills />
      <Testinomnials />
      <Contact />
    </div>
  );
}

export default App;
