import React, { useState, useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import "~/styles/tailwind.css";
import { Header } from "./ui/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import Footer from "./ui/Footer";
import { json } from "@remix-run/node";
import { LoaderFunctionArgs } from "@remix-run/node";
import api from "~/http/api";

export const loader = async ({}: LoaderFunctionArgs) => {
  try {
    const baseURL = process.env.VITE_BASE_URL;
    const data = await api.get(baseURL + "/footer");
    return json(data.data);
  } catch (error) {
    console.error("Failed to load footer data:", error);
    // Return a meaningful error response
    return json({ error: "Failed to load footer data" }, { status: 500 });
  }
};

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
              ? error.message
              : "Unknown Error"}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const footerData = useLoaderData<typeof loader>();
  // if (!footerData) {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  const [GLightbox, setGLightbox] = useState<any>(null);

  useEffect(() => {
    // Dynamically import GLightbox only in the browser
    const loadGLightbox = async () => {
      const module = await import("glightbox");
      setGLightbox(() => module.default);
    };

    loadGLightbox();

    if (GLightbox) {
      const lightbox = GLightbox({
        selector: "[data-glightbox]",
      });

      // Cleanup the lightbox instance when the component unmounts
      return () => {
        lightbox.destroy();
      };
    }
  }, [GLightbox]);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white antialiased dark:bg-gray-900">
        <Header />
        <main>{children}</main>
        <Footer footerData={footerData} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
