import { create } from "zustand";

export const useNewsStore = create((set) => ({
  news: [],

  fetchNews: async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0e1476f066ac48cebec9289869c89143"
      );
      const response = await fetch(
        "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=ca6bf90096d3cf3a7a1c506fae39f6b3"
      );
      // const guardianRes = await fetch(
      //   "https://content.guardianapis.com/search?api-key=f5c5a73b-fdbc-4350-81d8-144df9b5debd"
      // );
      const result = await response.json();
      const data = await res.json();
      // const guardianData = await guardianRes.json();
      set({
        news: [
          ...result.articles,
          ...data.articles,
          // ...guardianData.response.results,
        ],
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
