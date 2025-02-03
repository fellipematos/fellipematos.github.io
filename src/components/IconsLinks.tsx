import { Link } from "@heroui/react";
import { FaGithub, FaBehance, FaLinkedinIn, FaRegFolder, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export function IconsLinksBio() {
    return (
        <>
            <Link href="https://github.com/fellipematos" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank">
                <FaGithub />
            </Link>

            {/*<Link href="#" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank" isDisabled>
                <FaBehance />
            </Link>*/}

            <Link href="https://wa.me/+5511963889472" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank">
                <FaWhatsapp />
            </Link>

            <Link href="mailto:box.fellipematos@gmail.com" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank">
                <MdAlternateEmail />
            </Link>

            <Link href="https://www.linkedin.com/in/matosfellipe" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank">
                <FaLinkedinIn />
            </Link>

            <Link href="https://www.tabnews.com.br/fellipematos" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank">
                <FaRegFolder />
            </Link>

            <Link href="https://twitter.com/matosfellipe_" className="text-gray-700 hover:text-blue-500 text-4xl" target="_blank">
                <FaXTwitter />
            </Link>
        </>
    );
}
