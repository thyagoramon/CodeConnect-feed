import './App.css'
import Sidebar from './components/sidebar/sidebar.jsx'
import Searchbar from './components/searchbar/Searchbar.jsx'
import Filter from './components/filter/filter.jsx'
import Order from './components/order/order.jsx'

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <div>
        <Searchbar />
        <Filter />
        <Order />
      </div>
    </div>
  )
}

export default App
