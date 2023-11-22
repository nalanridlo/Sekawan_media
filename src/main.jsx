import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/js/bootstrap.bundle.js";
import RestaurantReducerProvider from './context/RestaurantReducer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <RestaurantReducerProvider>

    <App />
  </RestaurantReducerProvider>
  ,
)
