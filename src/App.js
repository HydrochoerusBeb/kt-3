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
      <header className='header' onScrollToFooter={scrollToFooter}>
        <h1>phone store</h1>
        <button>button</button>
      </header>
      
      <ProdList/>
      
    </div>
  );
}

export default App;
