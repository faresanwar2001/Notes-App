import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Dashboard/Layout'
import Login from './auth/Login/Login'
import Register from './auth/Register/Register'
import AuthLayout from './auth/auth-layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
import ProtectRoute from './protect-route/ProtectRoute'
import AddNote from './Dashboard/addNote/add-note'
import Home from './Dashboard/home/Home'
import FormNote from './Dashboard/FormNote/FormNote'


// react query
const queryClient = new QueryClient()

// Create browser router.
const route = createBrowserRouter([
  {path:"" , element:<Layout/>, children:[
    {index:true, element:<ProtectRoute><Home/></ProtectRoute>},
    {path:"/addNote", element:<ProtectRoute><AddNote/></ProtectRoute>},
    {path:"/formNote", element:<ProtectRoute><FormNote/></ProtectRoute>}
 
  ]},
  {path:"" , element:<AuthLayout/>, children:[
    {path:"/login", element:<Login/>},
    {path:"/register", element:<Register/>},

  ]}
])
function App() {

  return (
    <>
     {/* React query providers */}
      <QueryClientProvider client={queryClient}>
        {/* Router dom providers */}
        <RouterProvider router={route}>
        </RouterProvider>
          <Toaster/>
      </QueryClientProvider>
    </>
  )
}

export default App
