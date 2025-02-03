import { Image } from "@heroui/react";
import { IconsLinksBio } from "@/components/IconsLinks";


export function BioSlim() {
    return (
        <>
            <div className="flex flex-col items-center p-4 max-w-lg mx-auto md:max-w-2xl md:flex-row gap-8">
                <div className="w-32 h-32 md:w-32 md:h-32 flex-shrink-0 md:mr-6">
                    <Image
                        src="fellipe-matos-webmaster.jpeg"
                        alt="Foto do perfil"
                        width={168}
                        height={168}
                        className="rounded-full object-cover w-full h-full border-4 border-gray-600"
                        style={{ width: "100%", height: "auto", aspectRatio: "1 / 1" }}
                    />
                </div>
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-4xl font-bold">Fellipe Matos</h1>
                    <p className="text-gray-800 text-md md:text-md font-semibold uppercase">Webmaster | Cybersecurity Enthusiast</p>
                    <p className="mt-4 text-gray-400 text-sm md:text-base font-normal">
                        🌱 Em constante aprendizado, desenvolvimento web, linux, cibersegurança, gestão e otimização de servidores e cloud.
                    </p>
                    <div className="flex justify-center md:justify-start mt-8 space-x-4">
                        <IconsLinksBio />
                    </div>
                </div>
            </div>
        </>
    );
}


export function Bio() {
    return (
        <>
            <div className="flex flex-col items-center p-4 max-w-lg mx-auto md:max-w-2xl md:flex-row gap-8">
                <div className="w-32 h-32 md:w-32 md:h-32 flex-shrink-0 md:mr-6">
                    <Image
                        src="fellipe-matos-webmaster.jpeg"
                        alt="Foto do perfil"
                        width={168}
                        height={168}
                        className="rounded-full object-cover w-full h-full border-4 border-gray-600"
                        style={{ width: "100%", height: "auto", aspectRatio: "1 / 1" }}
                    />
                </div>
                <div className="mt-4 md:mt-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-4xl font-bold">Fellipe Matos</h1>
                    <p className="text-gray-800 text-md md:text-md font-semibold uppercase">Webmaster | Cybersecurity Enthusiast</p>
                    <div className="flex justify-center md:justify-start mt-2 space-x-4">
                        <IconsLinksBio />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start p-4 max-w-lg mx-auto md:max-w-2xl md:flex-col gap-4">
                <p className="mt-4 text-gray-400 text-sm md:text-base font-normal">
                    Atuo com desenvolvimento e suporte web, sempre buscando aprimorar meus conhecimentos em Flask, Next.js, Tailwind CSS e TypeScript para criar interfaces modernas e eficientes.
                </p>
                <p className="text-gray-400 text-sm md:text-base font-normal">
                    💡 Aprimorando meus conhecimentos para me especializar em Linux, cibersegurança, gestão e otimização de servidores e cloud.
                </p>
                <p className="text-gray-400 text-sm md:text-base font-normal">
                    🔍 Em busca de oportunidades, gosto de desafios, aprendizado constante e soluções criativas para problemas complexos.
                </p>
                <p className="text-gray-400 text-sm md:text-base font-normal">
                    📫 <b>Vamos conversar?</b> Fique à vontade para me chamar!
                </p>
            </div>
        </>
    );
}

