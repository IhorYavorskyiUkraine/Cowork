import { ErrorBoundary } from "react-error-boundary";

import BlogSinglePage from "../../components/blog/blogSinglePage/BlogSinglePage";

const PricingPage = () => {
   return (
      <ErrorBoundary
         fallback={
            <img
               className="errorBoundary"
               src="https://media1.tenor.com/m/ZvLReph5qCIAAAAC/skill-issue.gif"
            />
         }
      >
         <BlogSinglePage />
      </ErrorBoundary>
   );
};

export default PricingPage;
