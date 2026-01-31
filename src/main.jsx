
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App1 from './App1.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename='/p003/'>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/fc' element={<App1/>}></Route>
        </Routes>
    </BrowserRouter>
)
