import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Hoome from './pages/Hoome'
import ToliqMalumod from './pages/ToliqMalumod'
import MeinLeaut from './layout/MeinLeaut'
function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<MeinLeaut/>,
      children:[
        {
          path:'/',
          element:<Hoome/>
        },
        {
          path:'/toliq',
          element:<ToliqMalumod/>
        },

      ]
    },
  ])
  return (<>
   <RouterProvider router={router}/>
  </>
  )
}

export default App
