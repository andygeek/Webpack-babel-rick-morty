import search from './search'
import render from './render'

const id = prompt('Indique el Id del personaje')

search(id)
  .then((data)=> {
    render(data)
  })
  .catch(()=>{
    console.log('No hay resultado')
  })