import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = createClient({
    apiVersion: "2024-03-08",
    dataset: "production",
    projectId: "aj7gre8z",
    useCdn: false,
});

const builder = imageUrlBuilder(clientConfig)

export function urlFor(source: any) {
    return builder.image(source);
}