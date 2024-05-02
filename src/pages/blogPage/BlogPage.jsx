import { ErrorBoundary } from "react-error-boundary";

import Blog from "../../components/blog/Blog";

const PricingPage = () => {
	return <ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}><Blog/></ErrorBoundary>
}

export default PricingPage;