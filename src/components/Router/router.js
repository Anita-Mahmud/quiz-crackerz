import { createBrowserRouter } from 'react-router-dom';
import Error from '../Error';
import Home from '../Home';
import Root from '../layout/Root'
const router=createBrowserRouter([
  {
    path:'/',
   element:<Root></Root>,
   errorElement:<Error></Error>,
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