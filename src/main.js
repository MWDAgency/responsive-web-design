import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#footer').innerHTML = `
  <div>
    <p>Current Year: ${new Date().getFullYear()}</p>
  </div>
`

