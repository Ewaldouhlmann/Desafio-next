import { getPosts } from "@/app/lib/dataService";
export default async function BlogPage() {
    const posts = await getPosts();
    const { slug } = posts[0];
    return (
        <section>
            <div className="flex flex-col justify-center">
                <h1 className="">Blog</h1>
                <h2>{slug}</h2>

            </div>
        </section>
    )
}