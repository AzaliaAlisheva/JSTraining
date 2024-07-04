import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import Labs from './pages/Labs.svelte';
import Photos from './pages/Photos.svelte';
import Portfolio from './pages/Portfolio.svelte';

interface Route {
    path: string,
    component: typeof Home,
    label: string,
}

export const routes: Route[] = [
    { path: '/', component: Home, label: 'Home'},
    { path: '/about', component: About, label: 'About'},
    { path: '/photos', component: Photos, label: 'Photos'},
    { path: '/portfolio', component: Portfolio, label: 'Portfolio'},
    { path: '/labs', component: Labs, label: 'Labs'},
];