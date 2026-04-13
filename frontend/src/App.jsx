import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Signup from './Signup'
import Login from './Login'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
