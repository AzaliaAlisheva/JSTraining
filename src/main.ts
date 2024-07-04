/// <reference types="svelte" />
import App from './App.svelte'

import '../JSTraining/style.css'

const app = new App({
  target: document.getElementById('app')!,
})

export default app