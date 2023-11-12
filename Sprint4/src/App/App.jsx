import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Body from '../Body/Body';
import Contato from '../Contato/Contato';

function App() {

  return (
    <div>
      <Header />
      <Body />
      <Contato />
      <Footer />

    </div>
  )
}

export default App
