// import { create } from "zustand";
// import { account, ID } from "../lib/appwrite";

// const useAuthStore = create((set) => ({
//   result: null,
//   user: null,
//   loading: false,
//   error: null,

//   // Get currently logged-in user
//   getUser: async () => {
//     set({ loading: true });
//     try {
//       const user = await account.get();
//       set({ user, loading: false });
//     } catch (error) {
//       set({ error: error.message, user: null, loading: false });
//     }
//   },

//   // Email/password login
//   login: async (email, password) => {
//     set({ loading: true, error: null });
//     try {
//       console.log(email, password);
//       await account.createEmailPasswordSession(email, password);
//       const user = await account.get();
//       set({ user, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   // Register
//   signup: async (email, password, name) => {
//     set({ loading: true, error: null });
//     try {
//       const userId = ID.unique(); // generates a unique user ID
//       await account.create(userId, email, password, name);
//       const user = await account.get();
//       set({ user, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   // Logout
//   logout: async () => {
//     await account.deleteSession("current");
//     set({ user: null });
//   },
// }));

// export default useAuthStore;
