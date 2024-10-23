// import { useState } from 'react'
import './App.css'

import Header from './components/header/header' 
import ListComponent from './components/listComponent/listComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
    <Header />
    <ListComponent items={[{text: 'Item 1', isDone: false}, {text: 'Item 2', isDone: true}]} isUpcoming={true} />
    <ListComponent items={[{text: 'Item 3', isDone: true}, {text: 'Item 4', isDone: true}]} isUpcoming={false} />
    </main>
  )
}

export default App
