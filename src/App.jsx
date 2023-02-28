import './App.css'
import Calendar from './components/Calendar'

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in New York</h1>
      <h2>One week in New York is wonderful. If want to get to know the city and see all the sights, then spending 7 days in New York is perfect!</h2>
      <Calendar />
    </div>
  )
}

export default App;