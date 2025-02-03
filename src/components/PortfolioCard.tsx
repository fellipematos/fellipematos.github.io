import { FC } from "react";
import { Card, CardBody, CardFooter, Image, Link } from "@heroui/react";
import { RiExternalLinkFill } from "react-icons/ri";


interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ image, title, description, link }) => {
    return (
        <>
            <Link href={link}>
            <Card isPressable shadow="sm" className="w-[280px] gap-4">
                <CardBody className="overflow-visible p-0">
                    <Image
                        alt={title}
                        className="w-full object-cover h-[160px]"
                        radius="sm"
                        shadow="sm"
                        src={image}
                        width="100%"
                    />
                </CardBody>
                <CardFooter className="flex flex-row text-small justify-between">
                    <div className="text-left">
                        <b className="text-gray-400">{title}</b>
                        <p className="text-default-500 text-gray-400">{description}</p>
                    </div>
                    <Link href={link} className="text-gray-600 text-2xl"><RiExternalLinkFill /></Link>
                </CardFooter>
            </Card>
            </Link>
        </>
    );
};

export default PortfolioCard;