import { createClient } from "next-sanity";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NEXT_PUBLIC_USE_CD,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
});


export default client;
