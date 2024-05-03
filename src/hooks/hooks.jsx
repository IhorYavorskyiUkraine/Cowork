import { useMemo, useState } from "react";

const useFetchData = () => {
   const fetchTables = useMemo(
      () => async () => {
         try {
            const response = await fetch("http://localhost:3001/tables");
            const tablesData = await response.json();
            return tablesData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   const fetchTrusted = useMemo(
      () => async () => {
         try {
            const response = await fetch(
               "http://localhost:3001/trustedCompanies",
            );
            const trustedData = await response.json();
            return trustedData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   const fetchTWhyChoose = useMemo(
      () => async () => {
         try {
            const response = await fetch("http://localhost:3001/whyChoose");
            const whyChooseData = await response.json();
            return whyChooseData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   const fetchHearClients = useMemo(
      () => async () => {
         try {
            const response = await fetch("http://localhost:3001/hearClients");
            const hearClentsData = await response.json();
            return hearClentsData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   const fetchPricingPlans = useMemo(
      () => async () => {
         try {
            const response = await fetch("http://localhost:3001/pricingPlans");
            const pricingPlansData = await response.json();
            return pricingPlansData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   const fetchBlog = useMemo(
      () => async () => {
         try {
            const response = await fetch("http://localhost:3001/blog");
            const blogData = await response.json();
            return blogData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   const fetchSingleBlog = useMemo(
      () => async id => {
         try {
            const response = await fetch(`http://localhost:3001/blog/${id}`);
            const singleBlogData = await response.json();
            return singleBlogData;
         } catch (error) {
            console.error("Error", error);
         }
      },
      [],
   );

   return {
      fetchTables,
      fetchTrusted,
      fetchTWhyChoose,
      fetchHearClients,
      fetchPricingPlans,
      fetchBlog,
      fetchSingleBlog,
   };
};

const useLoading = () => {
   const [loading, setLoading] = useState(false);

   const startLoading = () => {
      setLoading(true);
   };

   const stopLoading = () => {
      setLoading(false);
   };

   return { loading, startLoading, stopLoading };
};

export { useFetchData, useLoading };
