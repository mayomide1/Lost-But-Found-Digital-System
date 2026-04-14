import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Signup from './Signup'
import Login from './Login'
import ReportLost from './ReportLost'
import ReportFound from './ReportFound'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/report-lost' element={<ReportLost/>} />
      <Route path='/report-found' element={<ReportFound/>} />
    </Routes>
    </>
  )
}

export default App
