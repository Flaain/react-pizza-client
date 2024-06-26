import Container from "../Container";
import Toaster from "../Toaster";
import { Outlet } from "react-router-dom";
import { Props } from "./model/interfaces";

const Layout = ({ headerSlot, announcementSlot, footerSlot }: Props) => {
    return (
        <Container>
            {announcementSlot ? (
                <div className='flex flex-col gap-5'>
                    {announcementSlot}
                    {headerSlot}
                </div>
            ) : (
                headerSlot
            )}
            <Toaster />
            <Outlet />
            {footerSlot && footerSlot}
        </Container>
    );
};

export default Layout;