import React from "react";
import getImageUrl from "@/shared/lib/helpers/getImageUrl";
import ProfileMenuHeader from "./ProfileMenuHeader";
import ProfileMenuLinks from "./ProfileMenuLinks";
import { routerList } from "@/shared/config/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const links: Record<string, React.ReactNode> = {
    header: <ProfileMenuHeader />,
    links: <ProfileMenuLinks />,
};

const ProfileMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    const handleMouseEnter = () => {
        setIsMenuOpened(true);
    };

    const handleMouseLeave = () => {
        setIsMenuOpened(false);
    };

    return (
        <div className='flex relative flex-col'>
            <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to={routerList.LK.main}
                className='flex flex-col items-center gap-1 group'
            >
                <img src={getImageUrl("profile.svg")} width={24} height={24} />
                <span className='text-primary-black text-sm opacity-50 group-hover:opacity-100 transition-opacity ease-in-out duration-200'>
                    Профиль
                </span>
            </Link>
            <AnimatePresence>
                {isMenuOpened && (
                    <motion.div
                        initial={{ opacity: 0, top: 60 }}
                        animate={{ opacity: 1, top: "100%" }}
                        exit={{ opacity: 0, top: 60 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className='absolute max-sm:left-0 sm:left-1/2 sm:-translate-x-1/2 pt-3'
                    >
                        <ul className='sm:after:top-0.5 sm:after:bg-white sm:after:rotate-45 sm:after:left-1/2 sm:after:-translate-x-1/2 sm:after:border-l-2 sm:after:border-t-2 sm:after:border-solid sm:after:border-primary-gray sm:after:absolute sm:after:w-5 sm:after:h-5 flex flex-col gap-5 p-5 box-border rounded-lg bg-white w-full max-w-[320px] z-50 shadow-lg border border-solid border-primary-gray'>
                            {Object.values(links).map((component, index) => <React.Fragment key={index}>{component}</React.Fragment>)}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProfileMenu;