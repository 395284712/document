import './App.css';
import Parent from './Page/Parent'
import Context from './Context'

function App() {

  const context = '传递的内容'
  
  return (
    <div className="App">
      <Context.Provider value={context}>
        <Parent />
      </Context.Provider>
    </div>
  );
}

export default App;
