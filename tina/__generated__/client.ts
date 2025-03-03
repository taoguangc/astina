import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'b43a3448682c1007f7bab3b6aace822bb9f4f086', queries,  });
export default client;
  