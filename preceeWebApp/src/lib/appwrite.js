import { Client, Account } from "appwrite";

import { Databases } from "appwrite";
export const client = new Client();
client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("precee-project");
//.setPlatform("com.lawancy.precee");

export const account = new Account(client);
// export const avatars = new Avatars(client);
export const databases = new Databases(client);
export { ID } from "appwrite";
