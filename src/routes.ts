import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Labs from './pages/Labs.svelte';
import Photos from './pages/Photos.svelte';
import Portfolio from './pages/Portfolio.svelte';


const routes = {
    '/': Home,
    '/about': About,
    '/labs': Labs,
    '/photos': Photos,
    '/portfolio': Portfolio,
//   '*': NotFound,
};

export default routes;