import './style.css'

document.querySelector('#footer').innerHTML = `
  <div>
    <p>&copy; MWD: ${new Date().getFullYear()}</p>
  </div>
`

console.log('Hello Vite!!!')