import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./utils/theme-provider";

import styles from "../app/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900 bg-white transition duration-500">
        <ThemeProvider>
          <div className="container mx-auto ">
            <Navbar />
            <Outlet />
            <ScrollRestoration />
          </div>
          <Scripts />
        </ThemeProvider>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
