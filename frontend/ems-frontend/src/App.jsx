import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import FooterComponent from './component/FooterComponent'
import HeaderComponent from './component/HeaderComponent'
import ListEmployeeComponent from './component/ListEmployeeComponent'
import EmployeeComponent from './component/EmployeeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
          <Routes>
            {/* //http:localhost:3000 */}
            <Route path='/' element = {<ListEmployeeComponent/>}></Route>

            {/* //http:localhost:3000/getAll */}
            <Route path='/getAll' element = {<ListEmployeeComponent/>}></Route>

            {/* //http:localhost:3000/employees/create */}
            <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>

            {/* //http:localhost:3000/employees/create */}
            <Route path='/delete-employee'></Route>

            {/* //http:localhost:3000/employees/edit-employee */}
            <Route path = '/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
            

          </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
    
  )
}

export default App
