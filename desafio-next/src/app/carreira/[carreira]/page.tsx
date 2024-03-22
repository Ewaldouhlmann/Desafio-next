import { getCarreirabySlug } from "@/app/lib/dataService";
import Link from "next/link";
import "@/app/globals.css";

type Props = {
    params: { carreira: string };
};

export default async function Carreira({ params }: Props) {
    const slug = params.carreira;
    const carreira = await getCarreirabySlug(slug);

    if (carreira) {
        const { slug, Area, position, Type, Remuneration, Description } = carreira[0];
        const formattedRemuneration = parseFloat(Remuneration).toFixed(2);
        return (
            <div className="max-w-screen-md mx-auto px-4 py-8">
                <h1 className="font-bold text-3xl text-center text-primary mb-4">{position}</h1>
                <div className="flex justify-center mb-4">
                    <div className="border border-black rounded-lg p-2 mr-2">
                        <h2 className="text-secondary font-bold">{Area}</h2>
                    </div>
                    <div className="border border-black rounded-lg p-2">
                        <h2 className="text-secondary font-bold">{Type}</h2>
                    </div>
                </div>
                <div className="text-secondary font-Montserrat mb-4">
                    <h2>{Description}</h2>
                </div>
                <div className="text-secondary font-Montserrat flex justify-between items-center">
                    <h2>Salário R${formattedRemuneration}</h2>
                    <Link className="bg-primary p-3" href="/">Voltar</Link>
                </div>
            </div>
        );
    } else {
        return <h1>Erro</h1>;
    }
}
