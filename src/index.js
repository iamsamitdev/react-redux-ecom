import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/main.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Routes from './Routes'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
)
