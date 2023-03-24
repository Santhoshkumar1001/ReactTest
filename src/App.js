import logo from './logo.svg';
import './App.css';

function App() {
  var count = 0;

  const counter = document.getElementById("counter-value")

  function handleChange(type){
    if(type === 'decrement' && count >= 1) count = count - 1;
    else if(type ==='increment') count = count + 1;
    changeUI(count);
    
    }
    
    function changeUI(value = 0) {
      counter.innerText = 1;
     }   

  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row" >
          <div className="counter-container">
<button className="counter-button"onClick={() => handleChange('decrement')}>-</button>
<div style={{width:20}}></div>
<p id = "counter-value" className="counter-text">{count}</p>

<div style={{width:20}}></div>
<button className="counter-button" onClick={() => handleChange('increment')}>+</button>
</div>

          </div>

        </div>

      </section>
      
    </div>
  );
}

export default App;
