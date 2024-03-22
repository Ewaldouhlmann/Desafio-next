import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { format } from 'date-fns';

interface Post {
    title: string;
    publishedBy: string;
    publishedAt: string;
    smallDescription: string;
    mainImageUrl: string;
    slug: { current: string } | null;
}

function CardPosts({ post }: { post: Post }) {
    const date = post.publishedAt;
    const convertedDate = format(new Date(date), 'dd/MM/yyyy');
    return (
        <Link href={post.slug ? `/${post.slug.current}` : '#'} className="w-[320px] h-80 gap-y-3">
            <Image src={post.mainImageUrl} alt="Post" width={500} height={300} className="w-full h-1/2" />
            <h1 className="font-Montserrat text-secondary text-lg overflow-hidden">{post.title}</h1>
        </Link>
    );
}

export default CardPosts;
