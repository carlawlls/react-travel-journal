import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Data from './data'

export default function App() {

  const cards = Data.map(item => {
    return (
      <Card
          key={item.id}
          item={item}
      />
    )
    })

  return (
    <div>
        <Navbar />
        <div className="cards">
          {cards}
        </div>
    </div>
  )
}
