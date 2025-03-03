import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '070846ae381cd42c3f8089a9484e6214b612d771', queries,  });
export default client;
  