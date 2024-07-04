declare module 'svelte-routing' {
    import { SvelteComponent } from 'svelte';
    
    export class Link extends SvelteComponent {
      $$prop_def: {
        to: string;
        replace?: boolean;
        state?: any;
        getProps?: (props: {
          location: Location;
          href: string;
          isPartiallyCurrent: boolean;
          isCurrent: boolean;
        }) => Record<string, any>;
      };
    }

    export class Route extends SvelteComponent {
        $$prop_def: {
            path: string;
            component: { new (options: { [key: string]: any }): SvelteComponent };
            condition?: () => boolean;
            onMount?: () => void;
            onUnmount?: () => void;
            onParams?: (params: { [key: string]: string }) => void;
            [key: string]: any;
        }
    }

    export class Router extends SvelteComponent {
        $$prop_def: {
            url?: string;
            basepath?: string;
            history?: any;
            [key: string]: any;
        };
    }
  }