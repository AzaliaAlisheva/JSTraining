import Comic from './Comic.svelte'

const comic = new Comic({
    target: document.getElementById('comicApp')!,
  })
  
export default comic

