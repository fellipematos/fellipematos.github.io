"use client";

import { FC, useState } from "react";
import { Image } from "@heroui/react";
import { MdOutlineClose, MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


interface Service {
    title: string;
    subtitle: string;
    description: string;
    tools: React.ReactNode[];
    gallery: string[];
}

interface ServicesListProps {
    services: Service[];
}

const ServicesList: FC<ServicesListProps> = ({ services }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string>("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image: string, index: number) => {
        setModalImage(image);
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    const nextImage = (gallery: string[]) => {
        const newIndex = (currentIndex + 1) % gallery.length;
        setModalImage(gallery[newIndex]);
        setCurrentIndex(newIndex);
    };

    const prevImage = (gallery: string[]) => {
        const newIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        setModalImage(gallery[newIndex]);
        setCurrentIndex(newIndex);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10" id={service.title}>

                    <div className="grid grid-cols-2 gap-4 order-1 md:order-1">
                        {service.gallery.map((image, imgIndex) => (
                            <div key={imgIndex} className="relative">
                                <Image
                                    src={image}
                                    alt={`Gallery Image ${imgIndex + 1}`}
                                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                                    onClick={() => openModal(image, imgIndex)}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <div className="p-6 order-2 md:order-2">
                        <h1 className="text-2xl font-bold text-gray-400">{service.title}</h1>
                        <span className="bg-blue-600 text-white text-xs px-3 rounded-full mb-2">
                            {service.subtitle}
                        </span>
                        <p className="text-md text-gray-500">{service.description}</p>
                        <div className="flex gap-4 mt-4">
                            {service.tools.map((tool, idx) => (
                                <div key={idx} className="text-2xl text-gray-600">
                                    {typeof tool === "string" ? (
                                        <Image src={tool} className="w-6 h-6 object-contain" />
                                    ) : (
                                        <span className="fill-gray-600">{tool}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            ))}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative flex items-center">
                        <button
                            onClick={() => prevImage(services[0].gallery)}
                            className="absolute left-4 text-white bg-gray-900 rounded-full p-2"
                        >
                            <MdOutlineArrowBackIos />
                        </button>
                        <Image src={modalImage} alt="Modal Image" className="max-w-full max-h-screen object-contain" />
                        <button
                            onClick={() => nextImage(services[0].gallery)}
                            className="absolute right-4 text-white bg-gray-900 rounded-full p-2"
                        >
                            <MdOutlineArrowForwardIos />
                        </button>
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-gray-900 rounded-full p-2"
                        >
                            <MdOutlineClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesList;
