import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Signup from './components/Signup'
import Login from './components/Login'
import ReportLost from './components/ReportLost'
import ReportFound from './components/ReportFound'
import Report from './components/Report'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import UserReports from './components/UserReports'
import UserSettings from './components/userSettings'



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/reports' element={<Report/>} />
      <Route path='/report-lost' element={<ReportLost/>} />
      <Route path='/report-found' element={<ReportFound/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/user-reports' element={<UserReports/>} />
       <Route path='/user-settings' element={<UserSettings/>} />



    </Routes>
    </>
  )
}

export default App
