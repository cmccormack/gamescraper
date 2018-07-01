import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import "./assets/images/placeholder.jpg"
import "./assets/styles/styles.scss"
import { AppProvider } from "./views/contexts/AppContext"

ReactDOM.render(
  <AppProvider>
    <App/>
  </AppProvider>,
  document.getElementById("root")
)




// import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome"
// import { faCheckSquare, } from "@fortawesome/free-solid-svg-icons/faCheckSquare"
// const App = () => (
//   <FontAwesomeIcon icon={faCheckSquare} />
// )
// ReactDOM.render(
//   <App/>,
//   document.getElementById("root")
// )
