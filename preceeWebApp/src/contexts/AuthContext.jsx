/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { account, databases } from "../lib/appwrite";
import { ID, Query } from "appwrite";

const DB_ID = import.meta.env.VITE_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_COLLECTION_ID;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get current user
  const getUser = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // to Login User
  const signin = async ({ email, password }) => {
    try {
      await account.createEmailPasswordSession(email, password);
      await getUser();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message, code: error.code };
    } finally {
      setLoading(false);
    }
  };

  // to register a user
  const createUser = async ({ email, password, name }) => {
    try {
      const userId = ID.unique(); // generates a unique user ID
      await account.create(userId, email, password, name);
      await signin({ email, password });
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        code: error.code,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  useEffect(() => {
    getUser();
  }, []);

  // Delete user and user-related documents from a collection
  const deleteAccount = async () => {
    setLoading(true);
    try {
      const userId = user?.$id;
      console.log(userId);

      // Delete user-related documents
      // const collectionsToClean = [
      //   { databaseId: DB_ID, collectionId: COLLECTION_ID },
      //   // { databaseId: "your-db-id", collectionId: "comments" },
      // ];

      // for (const { databaseId, collectionId } of collectionsToClean) {
      //   const docs = await databases.listDocuments(databaseId, collectionId, [
      //     Query.equal("userId", userId),
      //   ]);

      const response = await databases.listDocuments(DB_ID, COLLECTION_ID, [
        Query.equal("userId", userId),
      ]);
      const docs = response.documents ?? [];

      for (const doc of docs) {
        await databases.deleteDocument(DB_ID, COLLECTION_ID, doc.$id);
      }

      // Delete the user account
      await account.delete();

      // Clear user from context
      setUser(null);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        getUser,
        user,
        signin,
        createUser,
        logout,
        loading,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
