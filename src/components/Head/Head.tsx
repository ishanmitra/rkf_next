import Script from "next/script";

const Head = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* <meta name="author" content="Renfort Digital" /> */}
            <meta name="language" content="English" />

            <meta name="robots" content="follow" />
            <meta name="robots" content="index" />
            <meta name="googlebot" content="index" />
            <meta name="googlebot-news" content="index" />

            {/* Scripts */}
            {/* Google tag (gtag.js) */}
            {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XZXVCLBL2W" strategy="beforeInteractive" />
            <Script strategy="beforeInteractive">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XZXVCLBL2W');`}
            </Script> */}

            {/* Favicon */}
            <link rel="apple-touch-icon" sizes="144x144" href="labhya24storage.blob.core.windows.net/private/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="labhya24storage.blob.core.windows.net/private/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="labhya24storage.blob.core.windows.net/private/favicon/favicon-16x16.png" />
            <link rel="manifest" href="labhya24storage.blob.core.windows.net/private/favicon/site.webmanifest" />
            <link rel="mask-icon" href="labhya24storage.blob.core.windows.net/private/favicon/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />

            {/* CSS */}
            <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/bootstrap-xxxl.min.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/style-responsive.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/vertical-rhythm.min.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/magnific-popup.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/splitting.css" />
            <link rel="stylesheet" type="text/css" href="assets/css/theme.css" />
            {/* <link rel="stylesheet" type="text/css" href="assets/css/content.css" /> */}
            
            {/* Plugins */}
            <link rel="stylesheet" type="text/css" href="assets/plugins/video-js/video-js.css" />
            <link rel="stylesheet" type="text/css" href="assets/plugins/swiper/swiper.min.css" />

            {/* Custom */}
            <link rel="stylesheet" type="text/css" href="assets/css/custombf60.css?v=1727289795" />
            <link rel="stylesheet" type="text/css" href="assets/css/custom-smbf60.css?v=1727289795" />
            <link rel="stylesheet" type="text/css" href="assets/css/custom-mdbf60.css?v=1727289795" />
            <link rel="stylesheet" type="text/css" href="assets/css/custom-lgbf60.css?v=1727289795" />
            <link rel="stylesheet" type="text/css" href="assets/css/custom-xlbf60.css?v=1727289795" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com/" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet" /> */}
            {/* SEO Metas */}
            <meta name="title" content="Rangeen Khidki" />
            <meta name="keywords" content="Rangeen Khidki Foundation, RKF, Rangeen Khidki, NGO India" />

            <title>Rangeen Khidki</title>

            <style jsx global>
                {`#relentless-banner {
                    background-image: url('labhya24storage.blob.core.windows.net/private/home/relentless.png');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    height: 50vh;
                }

                @media only screen and (min-width: 992px) and (max-width: 1199px) {
                    #relentless-banner {
                        background-image: url('labhya24storage.blob.core.windows.net/private/home/relentless-laptop.png');
                    }
                }

                @media only screen and (min-width: 768px) and (max-width: 991px) {
                    #relentless-banner {
                        background-image: url('labhya24storage.blob.core.windows.net/private/home/relentless-tablet.png');
                    }
                }

                @media only screen and (max-width: 767px) {
                    #relentless-banner {
                        background-image: url('labhya24storage.blob.core.windows.net/private/home/relentless-mobile.png');
                    }
                }

                @keyframes horizontal-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-185%);
                    }
                }

                .swiper.auto-scroll {
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }

                .swiper.auto-scroll .swiper-wrapper {
                    animation: horizontal-scroll 16s linear infinite;
                    display: flex;
                }

                .swiper-wrapper.auto-sw-scroll {
                    transition-timing-function: linear;
                }

                @keyframes inf-scroll {
                    from{
                        transform: translateX(0) ;

                    }
                    to{
                        transform: translateX(-100%) ;

                    }
                }
                .inf-slider {
                    overflow: hidden;
                    padding: 36px 0;
                    white-space: nowrap;
                    position: relative;
                }

                .inf-slider:before,
                .inf-slider:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 48px;
                    height: 100%;
                    z-index: 2;
                }
                .inf-slider:before {
                    left: 0;
                    background: linear-gradient(to left, rgba(255,255,255,0), #33a6d3);
                }
                .inf-slider:after {
                    right: 0;
                    background: linear-gradient(to right, rgba(255,255,255,0), #33a6d3);
                }
                .inf-slider-track {
                    display: inline-block;
                    animation: 30s inf-scroll infinite linear;
                }
                .inf-slider-track .inf-slide img{
                    height: 50px;
                    margin: 0 40px;
                }`}
            </style>
        </>
    )
}

export default Head