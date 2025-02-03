import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


export function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Evita erro de hidratação

    return (
        <div className="flex">
            {resolvedTheme === "dark" ? (
                <button onClick={() => setTheme("light")}>
                    <svg className="w-6 h-6 fill-gray-400" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13.5C20.475 13.5 22.5 15.525 22.5 18C22.5 20.475 20.475 22.5 18 22.5C15.525 22.5 13.5 20.475 13.5 18C13.5 15.525 15.525 13.5 18 13.5ZM18 10.5C13.86 10.5 10.5 13.86 10.5 18C10.5 22.14 13.86 25.5 18 25.5C22.14 25.5 25.5 22.14 25.5 18C25.5 13.86 22.14 10.5 18 10.5ZM3 19.5H6C6.825 19.5 7.5 18.825 7.5 18C7.5 17.175 6.825 16.5 6 16.5H3C2.175 16.5 1.5 17.175 1.5 18C1.5 18.825 2.175 19.5 3 19.5ZM30 19.5H33C33.825 19.5 34.5 18.825 34.5 18C34.5 17.175 33.825 16.5 33 16.5H30C29.175 16.5 28.5 17.175 28.5 18C28.5 18.825 29.175 19.5 30 19.5ZM16.5 3V6C16.5 6.825 17.175 7.5 18 7.5C18.825 7.5 19.5 6.825 19.5 6V3C19.5 2.175 18.825 1.5 18 1.5C17.175 1.5 16.5 2.175 16.5 3ZM16.5 30V33C16.5 33.825 17.175 34.5 18 34.5C18.825 34.5 19.5 33.825 19.5 33V30C19.5 29.175 18.825 28.5 18 28.5C17.175 28.5 16.5 29.175 16.5 30ZM8.985 6.87C8.84623 6.73094 8.6814 6.62062 8.49994 6.54535C8.31848 6.47008 8.12395 6.43133 7.9275 6.43133C7.73105 6.43133 7.53652 6.47008 7.35506 6.54535C7.1736 6.62062 7.00877 6.73094 6.87 6.87C6.73094 7.00877 6.62062 7.1736 6.54535 7.35506C6.47008 7.53652 6.43133 7.73105 6.43133 7.9275C6.43133 8.12395 6.47008 8.31848 6.54535 8.49994C6.62062 8.6814 6.73094 8.84623 6.87 8.985L8.46 10.575C9.045 11.16 10.005 11.16 10.575 10.575C11.145 9.99 11.16 9.03 10.575 8.46L8.985 6.87ZM27.54 25.425C27.4012 25.2859 27.2364 25.1756 27.0549 25.1004C26.8735 25.0251 26.679 24.9863 26.4825 24.9863C26.286 24.9863 26.0915 25.0251 25.9101 25.1004C25.7286 25.1756 25.5638 25.2859 25.425 25.425C25.2859 25.5638 25.1756 25.7286 25.1004 25.9101C25.0251 26.0915 24.9863 26.286 24.9863 26.4825C24.9863 26.679 25.0251 26.8735 25.1004 27.0549C25.1756 27.2364 25.2859 27.4012 25.425 27.54L27.015 29.13C27.6 29.715 28.56 29.715 29.13 29.13C29.2691 28.9912 29.3794 28.8264 29.4546 28.6449C29.5299 28.4635 29.5687 28.269 29.5687 28.0725C29.5687 27.876 29.5299 27.6815 29.4546 27.5001C29.3794 27.3186 29.2691 27.1538 29.13 27.015L27.54 25.425ZM29.13 8.985C29.2691 8.84623 29.3794 8.6814 29.4546 8.49994C29.5299 8.31848 29.5687 8.12395 29.5687 7.9275C29.5687 7.73105 29.5299 7.53652 29.4546 7.35506C29.3794 7.1736 29.2691 7.00877 29.13 6.87C28.9912 6.73094 28.8264 6.62062 28.6449 6.54535C28.4635 6.47008 28.269 6.43133 28.0725 6.43133C27.876 6.43133 27.6815 6.47008 27.5001 6.54535C27.3186 6.62062 27.1538 6.73094 27.015 6.87L25.425 8.46C24.84 9.045 24.84 10.005 25.425 10.575C26.01 11.145 26.97 11.16 27.54 10.575L29.13 8.985ZM10.575 27.54C10.7141 27.4012 10.8244 27.2364 10.8996 27.0549C10.9749 26.8735 11.0137 26.679 11.0137 26.4825C11.0137 26.286 10.9749 26.0915 10.8996 25.9101C10.8244 25.7286 10.7141 25.5638 10.575 25.425C10.4362 25.2859 10.2714 25.1756 10.0899 25.1004C9.90848 25.0251 9.71395 24.9863 9.5175 24.9863C9.32105 24.9863 9.12652 25.0251 8.94506 25.1004C8.7636 25.1756 8.59877 25.2859 8.46 25.425L6.87 27.015C6.285 27.6 6.285 28.56 6.87 29.13C7.455 29.7 8.415 29.715 8.985 29.13L10.575 27.54V27.54Z"/>
                    </svg>
                </button>
            ) : (
                <button onClick={() => setTheme("dark")}>
                    <svg className="w-6 h-6 fill-gray-400" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.055 8.265C13.7841 9.23678 13.6478 10.2412 13.65 11.25C13.65 17.37 18.63 22.35 24.75 22.35C25.77 22.35 26.775 22.215 27.735 21.945C26.9471 23.8811 25.6003 25.5385 23.8664 26.706C22.1326 27.8735 20.0903 28.498 18 28.5C12.21 28.5 7.50001 23.79 7.50001 18C7.50001 13.605 10.215 9.825 14.055 8.265ZM18 4.5C15.33 4.5 12.7199 5.29176 10.4998 6.77516C8.27974 8.25856 6.54942 10.367 5.52763 12.8338C4.50585 15.3006 4.2385 18.015 4.7594 20.6337C5.28031 23.2525 6.56606 25.6579 8.45406 27.5459C10.3421 29.4339 12.7475 30.7197 15.3663 31.2406C17.985 31.7615 20.6994 31.4942 23.1662 30.4724C25.633 29.4506 27.7414 27.7203 29.2248 25.5002C30.7082 23.2801 31.5 20.67 31.5 18C31.5 17.31 31.44 16.62 31.35 15.96C30.6005 17.011 29.6102 17.8672 28.4619 18.457C27.3137 19.0468 26.0409 19.353 24.75 19.35C23.0328 19.35 21.36 18.8046 19.9728 17.7925C18.5856 16.7803 17.5558 15.3537 17.0318 13.7184C16.5078 12.0831 16.5168 10.3236 17.0575 8.69379C17.5982 7.06393 18.6425 5.64792 20.04 4.65C19.38 4.56 18.69 4.5 18 4.5Z"/>
                    </svg>
                </button>
            )}
        </div>
    );
}
