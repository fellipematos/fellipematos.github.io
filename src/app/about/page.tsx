import { Bio } from "@/components/Bio";
import { Progress } from "@heroui/react";

import { GrArchlinux } from "react-icons/gr";
import { TbBrandPython } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaLinux, FaDebian, FaUbuntu, FaRedhat, FaWindows, FaHtml5, FaCss3, FaBootstrap, FaMarkdown, FaSquareJs, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaAws } from "react-icons/fa6";
import { SiKalilinux, SiFlask, SiJinja, SiStreamlit, SiScrapy, SiPoetry, SiMaterialformkdocs, SiNextui, SiGnubash, SiHostinger, SiVercel, SiAdobe, SiAdobeillustrator, SiAdobephotoshop, SiGimp, SiInkscape, SiCanva } from "react-icons/si";


export default function About() {
    return (
        <>
            <h1 className="text-2xl md:text-2xl font-bold text-gray-400 py-10 text-center uppercase">About</h1>

            <Bio />

            <h1 className="text-2xl md:text-2xl font-bold text-gray-400 py-10 text-center uppercase">soft skill</h1>
            
            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Sistema Operacional"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={75}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <FaWindows />
                        <FaLinux />
                        <GrArchlinux />
                        <FaDebian />
                        <FaUbuntu />
                        <SiKalilinux />
                        <FaRedhat />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Python"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={65}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <TbBrandPython />
                        <SiFlask />
                        <SiJinja />
                        <SiStreamlit />
                        <SiScrapy />
                        <SiPoetry />
                        <SiMaterialformkdocs />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Linguagem de marcação e estilos"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={85}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <FaMarkdown />
                        <FaHtml5 />
                        <FaCss3 />
                        <RiTailwindCssFill />
                        <FaBootstrap />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Front-End"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={45}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <FaSquareJs />
                        <RiNextjsFill />
                        <SiNextui />
                        <FaNodeJs />
                        <BiLogoTypescript />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Outras linguagens"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={35}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <FaPhp />
                        <SiGnubash />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Versionamento"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={50}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <FaGitAlt />
                        <FaGithub />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Servidores"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={80}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <SiHostinger />
                        <SiVercel />
                        <FaAws />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-lg mx-auto md:max-w-2xl md:flex-row gap-6 py-8">
                <div className="flex flex-col w-full justify-center">
                    <Progress
                        className="max-w-md"
                        label="Edições de imagens"
                        maxValue={100}
                        showValueLabel={true}
                        size="sm"
                        value={90}
                    />
                    <div className="flex flex-row justify-center md:justify-start mt-8 space-x-4 text-3xl">
                        <SiAdobe />
                        <SiAdobeillustrator />
                        <SiAdobephotoshop />
                        <SiGimp />
                        <SiInkscape />
                        <SiCanva />
                    </div>
                </div>
            </div>
        </>
    );
}
