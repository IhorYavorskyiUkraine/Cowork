import { ErrorBoundary } from "react-error-boundary";

import Pricing from "../../components/pricing/Pricing";

const PricingPage = () => {
	return <ErrorBoundary fallback={<img className="errorBoundary" src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"/>}><Pricing/></ErrorBoundary>
}

export default PricingPage;