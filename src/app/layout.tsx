"use client";

import Footer from "@/components/Footer/Footer";
import Head from "@/components/Head/Head";
import NavPanel from "@/components/NavPanel/NavPanel";
import Scripts from "@/components/Scripts/Scripts";

import "./globals.css";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <html lang="en">
            <head>
                <Head />
            </head>
            <body id="body" className="appear-animate">
                {/* Page Loader */}
                <div className="page-loader color">
                    <div className="loader">Loading...</div>
                </div>
                {/* End Page Loader */}
                <div className="page" id="top">
                    <NavPanel />
                    {children}
                    <Footer />
                    <Scripts />
                </div>
            </body>
        </html>
    );
}

export default RootLayout;