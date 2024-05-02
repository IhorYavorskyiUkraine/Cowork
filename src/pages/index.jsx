import React, { Suspense } from 'react';
import Main from './mainPage/Main';

const LazyAbout = React.lazy(() => import('./aboutPage/About.jsx'));
const LazyPricing = React.lazy(() => import('./pricingPage/PricingPage.jsx'));
const LazyBlog = React.lazy(() => import('../components/blog/Blog.jsx'));
const LazyBlogSinglePage = React.lazy(() => import('./blogSinglePage/BlogSinglePage.jsx'));
const LazyEvents = React.lazy(() => import('./eventsPage/Events.jsx'));
const LazyNotFoundPage = React.lazy(() => import('./notFoundPage/NotFoundPage.jsx'));

export const About = () => {
	return <Suspense fallback={<div className='loader'></div>}><LazyAbout/></Suspense>
}
export const Pricing = () => {
	return <Suspense fallback={<div className='loader'></div>}><LazyPricing/></Suspense>
}
export const Blog = () => {
	return <Suspense fallback={<div className='loader'></div>}><LazyBlog/></Suspense>
}
export const BlogSinglePage = () => {
	return <Suspense fallback={<div className='loader'></div>}><LazyBlogSinglePage/></Suspense>
}
export const Events = () => {
	return <Suspense fallback={<div className='loader'></div>}><LazyEvents/></Suspense>
}
export const NotFoundPage = () => {
	return <Suspense fallback={<div className='loader'></div>}><LazyNotFoundPage/></Suspense>
}

export default Main;