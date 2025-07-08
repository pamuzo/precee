// import { create } from "zustand";
// import { databases, ID } from "../lib/appwrite";
// import { Role, Query } from "appwrite";

// const DB_ID = "68212d0a000ff80b55bd";
// const COLLECTION_ID = "68212d170023f9c2fb55";

// export const useMeasurementStore = create((set) => ({
//   measurements: [],
//   measurement: null,
//   loading: false,
//   error: null,
//   setMeasurements: (measurements) => set({ measurements }),

//   // to fetch all measurements
//   fetchMeasurements: async () => {
//     set({ loading: true, error: null });
//     try {
//       const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
//       console.log(res);
//       set({ measurements: res.documents, loading: false });
//     } catch (error) {
//       set({ error: error.message, loading: false });
//     }
//   },

//   // to get a single meansurement
//   fetchMeasurement: async (mid) => {
//     // set({ loading: true, error: null });
//     // try {
//     //   const res = await fetch(`/api/measurements/${mid}`);
//     //   if (!res.ok) throw new Error("Failed to find measurement");
//     //   const data = await res.json();
//     //   set({ measurement: data.data, loading: false });
//     // } catch (error) {
//     //   set({ error: error.message, loading: false });
//     // }
//   },

//   // to add a new measurement
//   addMeasurement: async (newMeasurement) => {
//     // if (!newMeasurement.name || !newMeasurement.phoneNumber) {
//     //   return {
//     //     success: false,
//     //     message: "please fill in the name and phone field",
//     //   };
//     // }
//     // const res = await fetch("/api/measurements", {
//     //   method: "POST",
//     //   headers: {
//     //     "content-type": "application/json",
//     //   },
//     //   body: JSON.stringify(newMeasurement),
//     // });
//     // const data = await res.json();
//     // set((state) => ({ measurements: [...state.measurements, data.data] }));
//     // return { success: true, message: "measurement created successfully" };
//   },

//   // delete a measurement
//   deleteMeasurement: async (mid) => {
//     // set({ loading: true });
//     // try {
//     //   const res = await fetch(`/api/measurements/${mid}`, { method: "DELETE" });
//     //   const data = await res.json();
//     //   if (!data.success) return { success: false, message: data.message };
//     //   set((state) => ({
//     //     measurements: state.measurements.filter(
//     //       (measurement) => measurement._id !== mid
//     //     ),
//     //   }));
//     //   return { success: true, message: data.message };
//     // } catch (error) {
//     //   set({ error: error.message, loading: false });
//     // }
//   },

//   // to update the measurement
//   updateMeasurement: async (mid, newData) => {
//     //   set({ loading: true });
//     //   try {
//     //     const res = await fetch(`/api/measurements/${mid}`, {
//     //       method: "PATCH",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(newData),
//     //     });
//     //     const data = await res.json();
//     //     if (!data.success) return { success: false, message: data.message };
//     //     set((state) => ({
//     //       measurement: state.measurements.map((measurement) =>
//     //         measurement._id === mid ? data.data : measurement
//     //       ),
//     //     }));
//     //     return { success: true, loading: false, message: data.message };
//     //   } catch (error) {
//     //     return { success: false, error: error.message, loading: false };
//     //   }
//   },
// }));
