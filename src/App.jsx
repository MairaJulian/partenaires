import './App.css'
import NavBar from './components/navBar/NavBar'
import Home from './screens/home/Home'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
        {/* <BrowserRouter>
        <Navigation />
      </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
