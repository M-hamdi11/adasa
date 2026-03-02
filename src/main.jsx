import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as React from "react";
import {HeroUIProvider} from "@heroui/react";



createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </HeroUIProvider>,
)
