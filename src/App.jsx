import Main from './components/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.scss'

function App() {

  return (
    <div className='wrapper'>
		<Header/>
		<Main/>
		<Footer/>
    </div>
  )
}

export default App;