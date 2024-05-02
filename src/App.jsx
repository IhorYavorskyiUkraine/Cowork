import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//PAGES
import Main, {
	About,
	Pricing,
	Blog, 
	BlogSinglePage, 
	Events, 
	NotFoundPage
} from './pages';

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
		path: '/blog/:id',
		element: <BlogSinglePage/>,
		errorElement: <NotFoundPage/>
	}
	,
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