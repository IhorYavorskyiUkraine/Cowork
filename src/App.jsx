import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//PAGES
import Main from './components/main/Main';
import About from './components/about/About';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Events from './components/events/Events';
//NOT FOUND
import NotFoundPage from './components/notFoundPage/NotFoundPage';

import './App.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main/>,
		errorElement: <NotFoundPage/>
	},
	{
		path: '/about',
		element: <About/>,
		errorElement: <NotFoundPage/>
	},
	{
		path: '/pricing',
		element: <Pricing/>,
		errorElement: <NotFoundPage/>
	},
	{
		path: '/blog',
		element: <Blog/>,
		errorElement: <NotFoundPage/>
	},
	{
		path: '/events',
		element: <Events/>,
		errorElement: <NotFoundPage/>
	}
]);

function App() {
	return <RouterProvider router={router}/>
}

export default App;