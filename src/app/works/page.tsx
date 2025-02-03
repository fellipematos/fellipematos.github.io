import { BioSlim } from "@/components/Bio";
import ServicesList from '@/components/WorkDetails';

import { FaPython, FaWordpress } from "react-icons/fa6";
import { SiMaterialformkdocs, SiAdobeillustrator, SiAdobephotoshop, SiCanva } from "react-icons/si";


function ProjectPage() {

    const servicesData = [
        {
            title: "Osint Brazuca",
            subtitle: "Documentação",
            description: "O OSINT Brazuca é um projeto de repositório que visa centralizar informações, fontes e técnicas de OSINT (Open Source Intelligence) dentro do contexto brasileiro. Após resolver uma issue no repositório oficial, realizei um fork e desenvolvi uma página de documentação utilizando Python e MkDocs, proporcionando uma interface mais acessível e organizada para os usuários e colaboradores do projeto.",
            tools: [<FaPython key="python"/>, <SiMaterialformkdocs key="Mkdocs"/>],
            gallery: ["works/1.jpg", "works/2.jpg", "works/3.jpg", "works/4.jpg"]
        },
        {
            title: "Emprega Dados",
            subtitle: "Desenvolvimento Web",
            description: "A Emprega Dados é uma empresa especializada em consultoria e treinamento na área de dados. O projeto envolveu o desenvolvimento de uma landing page em WordPress com Elementor, destacando a missão e os serviços oferecidos. Além disso, criei uma página de captura de leads para promover a pós-graduação em parceria com a Universidade Anhanguera, proporcionando uma maneira eficaz de conversão de visitantes em possíveis alunos.",
            tools: [<FaWordpress key="wordpress"/>],
            gallery: ["works/5.jpg", "works/6.jpg", "works/7.jpg", "works/8.jpg"]
        },
        {
            title: "49 Educação",
            subtitle: "Desenvolvimento Web",
            description: "49 Educação foca em fornecer consultoria e um ecossistema para acelerar startups, com o objetivo de apoiar empresas em crescimento ou que necessitam de ajuda estratégica para alavancar suas operações. Para este projeto, desenvolvi uma landing page na plataforma GreatPages com o objetivo de capturar leads para eventos.",
            tools: ["greatpages.svg"],
            gallery: ["works/13.jpg", "works/14.jpg", "works/15.jpg", "works/155.jpg"]
        },
        {
            title: "InCeres",
            subtitle: "Desenvolvimento Web",
            description: "A Inceres é uma empresa inovadora do ramo agrícola, que oferece soluções de software para o setor. O foco do projeto foi o desenvolvimento de uma landing page na plataforma GreatPages, com o objetivo de captar leads qualificados e potenciais clientes interessados nas soluções oferecidas pela empresa.",
            tools: ["greatpages.svg"],
            gallery: ["works/9.jpg", "works/10.jpg", "works/11.jpg", "works/12.jpg"]
        },
        {
            title: "SkinHealth",
            subtitle: "Loja Virtual",
            description: "SkinHealth é uma marca de cosméticos especializada em cuidados com a pele. Para este projeto, configurei uma loja virtual na plataforma NuvemShop, integrando sistemas de pagamento, frete e fiscal, garantindo uma experiência de compra simplificada e segura para os clientes. Além disso, desenvolvi os rótulos das embalagens de séruns para a linha de cosméticos da marca, utilizando design focado na estética e funcionalidade, alinhando as embalagens com a identidade visual da marca.",
            tools: ["nuvemshops.svg"],
            gallery: ["works/16.jpg", "works/17.jpg", "works/18.jpg", "works/19.jpg"]
        },
        {
            title: "Monstrão Lancheria",
            subtitle: "Social Media",
            description: "Monstro Lanches é uma lanchonete gourmet de hambúrgueres localizada em Joinville, SC. Para este projeto, desenvolvi artes gráficas para redes sociais (Facebook e Instagram), focando na promoção dos produtos e fortalecimento da presença digital da marca.",
            tools: [<SiCanva key="Canva"/>],
            gallery: ["works/20.jpg", "works/21.jpg", "works/22.jpg", "works/23.jpg"]
        },
        {
            title: "Tomanik Pizzas",
            subtitle: "Social Media",
            description: "A Tomanik Pizzas é uma pizzaria localizada em Joinville, SC, especializada em oferecer uma experiência culinária única. Para este projeto, criei artes publicitárias para a divulgação local e digital, utilizando a plataforma Canva. O objetivo foi criar materiais atrativos e impactantes para promover a pizzaria, destacando suas ofertas e diferenciais de forma visualmente envolvente e eficaz, com um foco especial na promoção digital.",
            tools: [<SiCanva key="Canva"/>],
            gallery: ["works/28.jpg", "works/29.jpg", "works/30.jpg", "works/31.jpg"]
        },
        {
            title: "Shinarai Sushi",
            subtitle: "Design Gráfico",
            description: "O Shinarai Sushi é um restaurante japonês especializado em sushis e pratos orientais gourmet. O projeto envolveu o desenvolvimento de um cardápio digital e embalagens de viagem para delivery, com foco nas receitas artesanais exclusivas da casa. As artes foram criadas utilizando Illustrator e Photoshop, garantindo que o design transmitisse a sofisticação e a qualidade da marca. As embalagens e o cardápio foram projetados para uma experiência diferenciada, refletindo o padrão elevado e o cuidado com os detalhes do restaurante.",
            tools: [<SiAdobeillustrator key="Illustrator"/>, <SiAdobephotoshop key="Photoshop"/>],
            gallery: ["works/24.jpg", "works/25.jpg", "works/26.jpg", "works/27.jpg"]
        },
        {
            title: "Outros",
            subtitle: "Diversos",
            description: "Ofereço serviços de desenvolvimento e suporte web. Cada projeto é realizado com foco em atender às necessidades do cliente e proporcionar resultados eficientes, seja para empresas de grande porte ou empreendedores individuais. ",
            tools: [],
            gallery: ["works/32.jpg", "works/33.jpg", "works/34.jpg", "works/35.jpg", "works/36.jpg", "works/37.jpg"]
        },
    ];

    return (
        <>
            <BioSlim />
            <h1 className="text-2xl md:text-2xl font-bold text-gray-400 py-10 text-center uppercase">Works</h1>
            <div>
                <ServicesList services={servicesData} />;
            </div>
        </>
    );
}

export default ProjectPage;
