import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// sempre que temos um elemento que o TypeScript julga que pode vir nulo
// mas nós sabemos com certeza que ele sempre vai vir, podemos por um
// ponto de exclamação ao fim
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
