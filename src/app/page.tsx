import { BioSlim } from "@/components/Bio";
import PortfolioCard from "@/components/PortfolioCard";


const projects = [
    {
        image: "works/1.jpg",
        title: "Osint Brazuca",
        description: "Página de documentação do projeto",
        link: "/works",
    },
    {
        image: "works/5.jpg",
        title: "Emprega Dados",
        description: "Site + Página parceria Anhanguera",
        link: "/works",
    },
    {
        image: "works/13.jpg",
        title: "49 Educação",
        description: "Página de venda de curso",
        link: "/works",
    },
    {
        image: "works/9.jpg",
        title: "InCeres",
        description: "Página de venda de curso",
        link: "/works",
    },
    {
        image: "works/16.jpg",
        title: "SkinHealth",
        description: "Loja virtual - Nuvemshops",
        link: "/works",
    },
    {
        image: "works/20.jpg",
        title: "Monstrão Lancheria - SC",
        description: "Social Media",
        link: "/works",
    },
    {
        image: "works/28.jpg",
        title: "Tomanik Pizzas",
        description: "Social Media",
        link: "/works",
    },
    {
        image: "works/24.jpg",
        title: "Shinarai Sushi",
        description: "Social Media",
        link: "/works",
    },
];


export default function Home() {
    return (
        <>
            <BioSlim />
            <h1 className="text-2xl md:text-2xl font-bold text-gray-400 py-10 text-center uppercase">Works</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto max-w-[900px] mb-20">
                {projects.map((project, index) => (
                    <PortfolioCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </>
    );
}
