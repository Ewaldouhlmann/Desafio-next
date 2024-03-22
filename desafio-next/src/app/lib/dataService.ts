import { createClient, groq } from "next-sanity";
import { clientConfig, urlFor } from "./sanity";

async function getGames() {
    const query = `*[_type == "game"] | order(_createdAt desc) {
        mainImage,
        slug
    }`;

    const games = await clientConfig.fetch(query);

    // Convertendo as URLs das imagens
    const gamesWithUrls = games.map(addImageUrl);

    return gamesWithUrls;
}
export { getGames };


export async function getGamesbySlug(slug: string) {
    const query = `*[_type == "game" && slug.current == "${slug}"]{
        GameTitle,
          mainImage,
          GamePrice,
          aboutGame,
          slug
      }
      `;
    try {
        const currentGame = await clientConfig.fetch(query);
        const currentGamewithImgUrl = currentGame.map(addImageUrl);
        return currentGamewithImgUrl;
    } catch (error) {
        console.error(error);
    };
}

// Função para adicionar a URL da imagem ao objeto do jogo
function addImageUrl(item: any) {
    return {
        ...item,
        mainImageUrl: urlFor(item.mainImage).url()
    };
}

async function getCarreiras() {
    const query = `*[_type == "Job"] | order(_createdAt desc) {
        slug,
        Area,
        position,
        Type
    }`;
    const carreiras = await clientConfig.fetch(query);
    console.log(carreiras);
    console.log("Saida do backend")
    return carreiras;
}
export { getCarreiras };


export async function getCarreirabySlug(slug: string) {
    const query = `*[_type == "Job" && slug.current == "${slug}"]{
        slug,
        Area,
        position,
        Type,
        Remuneration,
        Description
      }
      `;
    try {
        const currentCarreira = await clientConfig.fetch(query);
        return currentCarreira;
    } catch (error) {
        console.error(error);
    };
}

export async function getPosts() {
    const query = `*[_type == "blog"]{
        smallDescription,
        mainImage,
        title,
        slug,
        publishedBy,
        publishedAt
    }`;
    const posts = await clientConfig.fetch(query);
    const postswithImgUrl = posts.map(addImageUrl);
    return postswithImgUrl;
}
