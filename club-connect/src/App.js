
import './App.css';
import Event from './components/event'
import Category from './components/category'

function App() {

  const eventList = [
    <Event
      post="event 1"
      description="This is going to be the best event ever!"
      link= "umanitoba.ca"
    />,
    <Event
      post="event 2"
      description="This is going to be the best event ever!"
      link= "google.com"

    />,
    <Event
      post="event 3"
      description="This is going to be the best event ever!"
      link= "https://framer.com/projects/Untitled--8Pm1x2UVirWdLBtKdaJs-eKBUt?reason=web-signup&id=325517ef-e665-45e5-b5c7-4f0c853a08ca&preview=1&node=WQLkyLRf1"
    />
  ];

  return (
    <div className="App">
      <header className="App-header">Club-Connect</header>
      <div>
        <Category events = {eventList}
        />
      </div>
    </div>
  );
}

export default App;
