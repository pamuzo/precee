/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { databases } from "../lib/appwrite";
import { ID } from "../lib/appwrite";
import { useAuth } from "./AuthContext";
import { Permission, Role } from "appwrite";

const DB_ID = import.meta.env.VITE_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;

const MeasurementsContext = createContext();

export const MeasurementsProvider = ({ children }) => {
  const [measurements, setMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // =======Fetch all measurements by current user===========
  const fetchMeasurements = async () => {
    setLoading(true);
    try {
      // if (!user) return;
      const response = await databases.listDocuments(DB_ID, COLLECTION_ID);
      setMeasurements(response.documents);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // ==========fetch measurements by ID ===========
  const fetchMeasurement = async (mid) => {
    setLoading(true);
    try {
      const res = await databases.getDocument(DB_ID, COLLECTION_ID, mid);
      return res;
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==================create new mesurement =========
  const addMeasurement = async (data) => {
    setLoading(true);

    try {
      const newMeasurement = await databases.createDocument(
        DB_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          ...data,
          userId: user?.$id,
        },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
      setMeasurements((prev) => [newMeasurement, ...prev]);
    } catch (err) {
      console.error("Error creating post:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ========Update measurement =========================

  const updateMeasurement = async (id, data) => {
    setLoading(true);

    try {
      const updated = await databases.updateDocument(
        DB_ID,
        COLLECTION_ID,
        id,
        data
      );
      setMeasurements((prev) =>
        prev.map((post) => (post.$id === id ? updated : post))
      );
      setLoading(false);
    } catch (err) {
      console.error("Error updating post:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete single  measurements
  const deleteMeasurement = async (id) => {
    try {
      await databases.deleteDocument(DB_ID, COLLECTION_ID, id);
      setMeasurements((prev) => prev.filter((post) => post.$id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
      throw err;
    }
  };

  return (
    <MeasurementsContext.Provider
      value={{
        measurements,
        addMeasurement,
        loading,
        deleteMeasurement,
        updateMeasurement,
        fetchMeasurement,
        fetchMeasurements,
      }}
    >
      {children}
    </MeasurementsContext.Provider>
  );
};

export const useMeasurements = () => useContext(MeasurementsContext);
