
import {

  Links,
  LiveReload,

  Outlet,
  Scripts,
  ScrollRestoration,


} from "@remix-run/react";
import type { MetaFunction, LinksFunction  } from "@remix-run/node";
import tailwindStyles from '~/tailwind.css'
import baseStyles from '~/styles/base.css'
import favicon from '~/assets/images/favicon.png'
import { GraphProvider } from "./components/graphContext";
export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStyles },
    { rel: 'stylesheet', href: baseStyles  },
    { rel: 'icon', href: favicon ,
  type: 'image/png'},
  ]
}

export const meta: MetaFunction = () => {
  return [
    { title: "Graphy" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {

  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
        <Links />
      </head>
      <body>
        <GraphProvider>
        <Outlet />
        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        </GraphProvider>
      </body>
    </html>
  );
}
