import { RouterProvider } from "react-router-dom";
import './global.css'
import { router } from "./router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"/>
      <Toaster  richColors closeButton/>
      <RouterProvider router={router} />
    </HelmetProvider>
   
  )
}

