import './App.css';
import ProdList from './Components/ProdList';

function App() {

  
const scrollToFooter=()=>{
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior:'smooth'
  })
}



  return (
    <div className="App"> 
      <header className='header' onClick={scrollToFooter}>
        <h1>phone store</h1>
        <button>button</button>
      </header>
      
      <ProdList/>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
