import React from 'react'
import './index.css'
import Card from "./components/Card"
import data from "./data"
import NavBar from './components/NavBar'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
      )
  })


  return (
    <div>
      <nav>
       <NavBar />
      </nav>
      <section className="cards-list">
      {cards}
      </section>
    </div>
  )
}

