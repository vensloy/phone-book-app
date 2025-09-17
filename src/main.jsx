
// == Хуки
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// == Reset css
import './reset.css'

// == Страницы сайта
import Reg from './assets/pages/reg-page/Reg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reg />
  </StrictMode>,
)
