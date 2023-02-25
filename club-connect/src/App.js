
import './App.css';
import Event from './components/event'

function App() {
  return (
    <div className="App">
      <header className="App-header">Club-Connect</header>
      <div>
      <Event
        post="event 1"
        description="This is going to be the best event ever!"
      />
      <Event
        post="event 2"
        description="This is going to be the best event ever!"
      />
      <Event
        post="event 3"
        description="This is going to be the best event ever!"
      />
      </div>
    </div>
  );
}

export default App;
