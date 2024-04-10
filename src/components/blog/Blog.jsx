import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Blog.scss"

const Blog = () => {
  return(
	<>
		<Header />
		<main className="main">
			<section className="blog">
				<div className="container">
					<div className="blog__content">
						<h1>Blog</h1>
					</div>
				</div>
			</section>
		</main>
		<Footer/>
	</>
  );
}
export default Blog;