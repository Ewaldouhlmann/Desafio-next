import { getGamesbySlug } from "@/app/lib/dataService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "@/app/globals.css"
import { PortableText } from "@portabletext/react";

type Props = {
    params: { game: string };
};


const customPortableTextStyle = {
    p: {
        color: 'gray',
        fontSize: '16px',
        lineHeight: '1.5',
    },
    h1: {
        color: 'black',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
};

export default async function Jogo({ params }: Props) {
    const slug = params.game;
    const game = await getGamesbySlug(slug);

    if (game) {
        const { GameTitle, mainImageUrl, GamePrice, aboutGame, slug } = game[0];
        const formattedPrice = parseFloat(GamePrice).toFixed(2);
        console.log(aboutGame)
        return (
            <><div className="gap-7 flex-col flex">
                <h1 className="font-PressStart text-primary text-2xl mt-4 text-center">{GameTitle}</h1>
                <div className="block mr-auto ml-auto w-4/5 h-2/5">
                    <Image
                        src={mainImageUrl}
                        alt="Game"
                        width={1240}
                        height={490}
                        quality={70}
                        style={{ width: '80vw', height: '35vh', display: "block", marginRight: "auto", marginLeft: "auto" }}
                    />
                </div>
                <div className="flex justify-start w-4/5 ml-auto mr-auto">
                    <h2 className="text-secondary font-Montserrat self-center">Valor: R$ {formattedPrice}</h2>
                    <button className="text-secondary p-3 bg-primary rounded-md ml-4">Comprar</button>
                </div>
                <div className="w-4/5 ml-auto mr-auto text-secondary font-Montserrat">
                    <PortableText
                        value={aboutGame}
                    />
                </div>
            </div>

            </>
        );
    } else {
        return <h1>Erro</h1>;
    }
}


