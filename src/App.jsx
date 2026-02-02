import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Welcome react</h1>
      <Card cardTitle="First Card"/>
      <Card cardTitle="Second Card"/>
      <Card cardTitle="Third Card"/>
    </>
  )
}

const Card = ({cardTitle}) => {
  const [like, setLike] = useState(false)
  return (
    <>
    <div>
    <h2>This is a card {cardTitle}</h2>
    <button onClick ={() => setLike(!like)}>
      {like ? 'Unlike' : 'Like'}
    </button>
    </div>
    </>
  )
}

export default App
