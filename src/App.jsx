import { useState } from 'react'
import './App.css'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'

function App() {
  const [activeSection, setActiveSection] = useState("");
  return (
    <div className="App grid lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 w-full h-full">
      <LeftContainer activeId={activeSection}/>
      <RightContainer setActiveSection={setActiveSection}/>
    </div>
  )
}

export default App
