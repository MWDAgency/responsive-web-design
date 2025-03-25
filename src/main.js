import './style.css'

document.querySelector('#footer').innerHTML = `
  <div>
    <p>Current Year: ${new Date().getFullYear()}</p>
  </div>
`

console.log('Hello Vite!')