import { RouterProvider } from 'react-router-dom'
import router from './router/index';
import './root.css';
function Root() {

  return (
    <RouterProvider router={router} />
  )
}

export default Root
