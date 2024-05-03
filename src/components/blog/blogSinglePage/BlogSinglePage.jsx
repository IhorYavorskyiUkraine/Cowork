import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useFetchData, useLoading } from "../../../hooks/hooks.jsx";

import Header from "../../header/Header.jsx";
import Footer from "../../footer/Footer.jsx";

import back from "/images/slider/1.png";

import "./BlogSinglePage.scss";

const BlogSinglePage = () => {
   const [data, setData] = useState([]);

   const { id } = useParams();
   const { loading, startLoading, stopLoading } = useLoading();
   const { fetchSingleBlog } = useFetchData();

   const onRequest = () => {
      setTimeout(() => {
         fetchSingleBlog(id)
            .then(data => setData(data))
            .catch(error => {
               console.error("Error fetching data:", error);
            });
      }, 300);
   };

   useEffect(() => {
      startLoading();
      onRequest();
      stopLoading();
   }, []);

   return (
      <>
         <Header />
         <main className="main">
            <section className="blogPage">
               <div className="container">
                  <div className="blogPage__wrapper">
                     <Link to="/blog" className="back">
                        <img src={back} className="back-img" alt="back" />
                        Back
                     </Link>
                     <div className="blogPage__content">
                        <div className="blogPage__column">
                           <div className="blogPage__image">
                              <img src={data.image} alt="blog image" />
                           </div>
                           <p
                              className="blogPage__category"
                              style={{ background: `${data.style}` }}
                           >
                              {data.category}
                           </p>
                        </div>
                        <div className="blogPage__column">
                           <h1 className="blogPage__title title">
                              {data.title}
                           </h1>
                           <p className="blogPage__text">{data.text}</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default BlogSinglePage;
