import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyNavbar from './navbar/navbar.jsx'
import Home from  './home/home.jsx'
import We from './who-we/We.jsx'
import LayOut from './lay-out/lay-out.jsx'
import Footer from './footer/footer.jsx'
import Blog from './blog/blog.jsx'
import BlogDetails from './blog/blogDetails.jsx'
import { Link,createBrowserRouter,RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
   {path:"/" ,element:<LayOut/>,children:[
      {index:true ,element:<Home/>},
      {path:"home" ,element:<Home/>},
      {path:"about" ,element:<We/>},
      {path:"blog" ,element:<Blog/>},
      {path:"*",element:<Home/>},
      { path: "blog/:slug", element: <BlogDetails /> }
      
   ] },
  
])
function App() {
   return <>   
   <RouterProvider router={router} />
   </>
}

export default App
