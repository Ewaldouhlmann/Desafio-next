import { getPosts } from "@/app/lib/dataService";
import Image from "next/image";
import { format } from "date-fns"
import CardPosts from "@/components/cardPost/cardPost";


export default async function BlogPage() {
    const posts = await getPosts();
    const FirstPost = posts[0];
    const date = posts[0].publishedAt;
    const convertedDate = format(new Date(date), 'dd/MM/yyyy');

    const truncatedDescription = `${FirstPost.smallDescription}...`;
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-PressStart text-primary text-2xl mt-4 text-center">Blog</h1>
            <div className="flex mt-8 gap-x-5 max-h-96 max-w-5xl w-full">
                <Image src={FirstPost.mainImageUrl} alt="Game" width={124} height={490} quality={70} className="w-1/2" />
                <div className="flex flex-col m-0 p-0 w-1/2 h-80">
                    <h1 className="font-Montserrat text-secondary text-2xl">{FirstPost.title}</h1>
                    <div className="flex gap-2">
                        <h3 className="text-secondary mb-3">Por {FirstPost.publishedBy}</h3>
                        <h3>{convertedDate}</h3>
                    </div>
                    <h2 className="font-Montserrat text-base text-secondary max-h-1/2 overflow-hidden">{truncatedDescription}</h2>
                </div>
            </div>
            <div className="flex flex-wrap pt-20 gap-8 max-w-5xl ml-auto mr-auto">
                {posts.map((post: any, index: number) => {
                    if (index !== 0) {
                        return <CardPosts key={index} post={post} />
                    }
                })}
            </div>

        </div>
    )
}