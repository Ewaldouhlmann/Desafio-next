"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function GamesCarrousel({ games }: { games: any[] }) {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1000) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full max-w-screen-xl mx-auto lg:px-0 place-content-center text-center"> { }
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={slidesPerView}
                spaceBetween={20}
                loop={true}
                className='place-content-center max-w-full'
            >
                {games.map((game: any, index: number) => (
                    <SwiperSlide key={index}>
                        <Link href={`/games/${game.slug.current}`}>
                            <Image src={game.mainImageUrl} alt="Slider" width={400} height={400} style={{ width: '400px', height: '300px', display: "block", marginRight: "auto", marginLeft: "auto" }} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
