import Datetime from "./Datetime.jsx"
import Weather from "./Weather.jsx"
import Quote  from "./Quote.jsx"
import System from "./System.jsx"
import List from "./List.jsx"

import { db } from "./firebaseConfig.js"; // ✅ Adjust path if needed


function App() {
  

  return (
    <>
      <div className="container">
        <Datetime/>
        <Weather/>
        <List/>
        <System/>
        <Quote/>

      </div>
    </>

  )
}

export default App
