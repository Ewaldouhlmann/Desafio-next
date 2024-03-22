"use client"
import Link from "next/link";
interface Carreira {
    position: string;
    Area: string;
    Type: string;
    slug: { current: string } | null;
}

export default function CarreiraCard({ carreira }: { carreira: Carreira }) {
    return (
        <Link href={carreira.slug ? `/carreira/${carreira.slug.current}` : '#'}>
            <div className="w-80 h-20 border-4 border-terciary flex flex-col justify-center px-5 items-left">
                <h1 className="text-terciary text-left text-lg w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{carreira.position}</h1>
                <div className="flex gap-3">
                    <div className="border-2 border-terciary max-w-full">
                        <h2 className="text-terciary text-left">{carreira.Area}</h2>
                    </div>
                    <div className="border-2 border-terciary max-w-full">
                        <h2 className="text-terciary text-left">{carreira.Type}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}
