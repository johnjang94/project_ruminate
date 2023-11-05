 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GeneralContextProvider } from './contexts/GeneralContext'
import Home from './pages/home'
import Root from './pages/root'
import AdminDashboard from './pages/admin/admin-dashboard'
import ProducerDashboard from './pages/producer/producer-dashboard/ProducerDashboard'
import EvaluatorDashboard from './pages/evaluator/evaluator-dashboard/EvaluatorDashboard'
import Registration from './pages/authentication/registration'
import { AuthContextProvider } from './contexts/AuthContext'
import Login from './pages/authentication/login'
 

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AuthContextProvider>
          <GeneralContextProvider>
            <Root />
          </GeneralContextProvider>
        </AuthContextProvider>
      ),
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
 
        { path: '/admin', element: <AdminDashboard /> },
        { path: '/producer', element: <ProducerDashboard /> },
        { path: '/evaluator', element: <EvaluatorDashboard /> },
        { path: 'signup', element: <Registration /> },
        { path: 'signin', element: <Login /> },
 
      ],
    },
  ])

  return <RouterProvider router={router} />
}
