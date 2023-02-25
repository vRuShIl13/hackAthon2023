
import './App.css';
import Event from './components/event'


function App() {
  return (
    <div className="App">
      <header className="App-header">Club-Connect</header>
      <div >
      <Event className = "devHack"
        post="event 1"
        description="This is going to be the best event ever!"
        link= "https://devclub.ca/"
        image = "https://media.licdn.com/dms/image/C5622AQEp1OwuO8WezA/feedshare-shrink_1280/0/1676658904610?e=1680134400&v=beta&t=2WKQ2dCJs-HacAtIgMBUNwiAcD0gYO0oM9JkdHioSoY"
      />
      
  
      </div>
    </div>
  );
}

export default App;
