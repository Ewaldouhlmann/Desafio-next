import Image from "next/image";
import { getGames, getCarreiras } from "@/app/lib/dataService";
import GamesCarrousel from "../components/gamesCarrousel/gamesCarrousel";
import CarreiraCard from '../components/carreiraCard/carreiraCard';
import Link from "next/link";



export default async function Home() {
  const gamesData = await getGames();
  const carreirasData = await getCarreiras();
  console.log(carreirasData);
  console.log
  return (
    <main className="flex flex-col items-center gap-11">
      <div className="pt-3" id="jogos">
        {gamesData.length > 0 && (
          <Link href={`games/${gamesData[0].slug.current}`}>

            <Image key={0} src={gamesData[0].mainImageUrl} alt="" width={1240} height={493} style={{ width: '1240px', height: '493px' }} />
          </Link>
        )}
      </div>
      <GamesCarrousel games={gamesData} />
      <div className="gap-1">
        <h1 id="sobre" className="font-PressStart text-primary text-2xl mt-4 text-center">Sobre Nós</h1>
        <div className="mt-4 flex flex-col lg:flex-row items-center justify-center w-full max-w-screen-xl mx-auto px-4 lg:px-0">
          <div className="w-full lg:w-1/2">
            <p className="font-Montserrat text-base indent-8 text-white">
              Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.
            </p><p className="font-Montserrat text-base indent-8 text-white">
              Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.
            </p><p className="font-Montserrat text-base indent-8 text-white">
              Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!
            </p>
          </div>
          <div className="w-1/2 lg:w-1/2">
            <div className="w-full max-w-sm mx-auto lg:max-w-none">
              <Image src="/images/about_img.png" alt="logo" width={566} height={692} />
            </div>
          </div>
        </div>
      </div>
      <div className="gap-y-1 flex flex-col">
        <h1 className="font-PressStart text-primary text-2xl mt-4 text-center">Carreira</h1>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-screen-xl px-4 lg:px-0">
          {carreirasData.map((carreira: any, index: number) => (
            <CarreiraCard key={index} carreira={carreira} />
          ))}
        </div>
      </div>


    </main>
  );
}


