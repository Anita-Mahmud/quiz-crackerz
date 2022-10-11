import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Root from '../layout/Root'
const router=createBrowserRouter([
  {
    path:'/',
   element:<Root></Root>,
   errorElement:<p>not flound</p>,
   children:[
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: 'home',
      element: <Home></Home>,
    },
   ]
    
  }
])
export default router;