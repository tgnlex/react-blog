import {Login, Register} from '@/app/pages';
const auth = {
  path: 'auth',
  children: [
    {
        path: '/auth/login',
        element: <Login/>,
    },
    {
        path: '/auth/register',
        element: <Register />
    }
  ]
}
export default auth;