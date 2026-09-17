import Weather from "./components/weather"
import { LoadingContext } from "../context/LoadingContext"
import { useState } from "react"
function App() {
  const [loading , setLoading] = useState(false);
  const [inputValue , setInputValue] = useState("")
  return (
    <LoadingContext.Provider value={{loading , setLoading , inputValue , setInputValue}}>
    <div className="container">
    <Weather/>
    </div>
    </LoadingContext.Provider>
  )
}

export default App
