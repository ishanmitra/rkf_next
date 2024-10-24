import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
    description: 'Labhya makes well-being programs accessible to vulnerable children in partnership with governments. We are creating a global movement for children’s well-being!',
}

const page = () => {
    return (
        <main id="main">
            <div className="content-wrapper">

                {/* Home Section */}
                <section className="home-section" id="home">
                    <div className="container-full-width">
                        <div className="row g-0">
                            <div className="col-12 col-lg-7 col-xl-8 col-xxl-8 col-xxxl-9 d-flex align-items-stretch">
                                <div className="split-image-left rounded-0">
                                    <img src="rangeenkhidki/banner.jpg"
                                        srcSet="rangeenkhidki/banner.jpg 1x"
                                        alt="" className="wow fadeScaleOutIn" data-wow-duration="1.3s" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-4 col-xxl-4 col-xxxl-3 order-lg-first">

                                <div className="row g-0">
                                    <div
                                        className="d-flex align-items-center split-column-right position-relative rounded-0 p-0">
                                        <div className="d-flex justify-content-center w-100 text-center text-lg-start">
                                            <div className="max-vw-33">
                                                <h3 className='wow fadeInUp animated text-center'>Welcome to</h3>
                                                <img src="rangeenkhidki/site-logo-hero.jpg"
                                                    srcSet="rangeenkhidki/site-logo-hero.jpg 1x"
                                                    alt="" className="wow fadeScaleOutIn mx-auto pb-14" data-wow-duration="1.3s" />
                                                <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                                    <div className="local-scroll mb-30 justify-self-center">
                                                        <a href="javascript:void(0);" className="btn btn-mod btn-color btn-small btn-hover-anim rounded">
                                                            <span className='uppercase font-bold'>Learn More</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* End Home Section */}

                {/* Home Section */}
                {/*<section className='h-[80vh] flex items-center justify-center'>
                    <div className="d-flex flex-column justify-content-center rounded-0 position-relative align-items-center px-5 pt-3">
                        <h3 className='wow fadeInUp animated text-center'>Welcome to</h3>
                        <img src="rangeenkhidki/site-logo-hero.jpg"
                            srcSet="rangeenkhidki/site-logo-hero.jpg 1x"
                            alt="" className="wow fadeScaleOutIn mx-auto pb-14" data-wow-duration="1.3s" />
                        <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                            <div className="local-scroll mb-30">
                                <a href="javascript:void(0);" className="btn btn-mod btn-color btn-small btn-hover-anim rounded">
                                    <span className='uppercase font-bold'>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* End Home Section */}

                {/* About Us Section */}
                <section className="page-section bg-primary-1-a bg-scroll" id="partners">
                    <div className="container position-relative text-center">
                        <div className="swiper" id="about-us-swiper">
                            <div className="swiper-wrapper mb-5">
                                <div className="swiper-slide background">
                                    <div className="">
                                        <div className="col-12 col-xxl-10 offset-xxl-1 my-5 my-lg-3">
                                            <div className="partner-logo-holder justify-content-center align-items-center col-12 px-20">
                                                <h4>About Us</h4>
                                                <p className='text-white'>
                                                    Rangeen Khidki is an organization dedicated to effective ways of capacity building and life skill development (capacity building: education/ vocational courses/ poverty alleviation) in communities with gender justice at its core. Rangeen Khidki is a group of young professionals working together with the aim to build innovative ways to educate and empower communities from a human rights perspective.<br /><br />
                                                    Rangeen Khidki works with urban as well as rural youth and women on Gender &amp; Sexuality, Sexual Reproductive Health Rights, mental health, education, and life skills.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide background">
                                    <div className="">
                                        <div className="col-12 col-xxl-10 offset-xxl-1 my-5 my-lg-3">
                                            <div className="partner-logo-holder justify-content-center align-items-center col-12 px-20">
                                                <h4>Vision</h4>
                                                <p className='text-white'>
                                                    Rangeen Khidki envisions a world where all adolescent and young persons across all gender and diversities can access education, information, services and support related to their physical and mental well-being and can grow to their fullest potential as leaders.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide background">
                                    <div className="">
                                        <div className="col-12 col-xxl-10 offset-xxl-1 my-5 my-lg-3">
                                            <div className="partner-logo-holder justify-content-center align-items-center col-12 px-20">
                                                <h4>Mission</h4>
                                                <p className='text-white'>
                                                    Rangeen Khidki works towards gender justice and empowerment with a rights based approach to enhance leadership, build networks in advocacy and work towards entitlements, dissemination of knowledge in community.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide background">
                                    <div className="">
                                        <div className="col-12 col-xxl-10 offset-xxl-1 my-5 my-lg-3">
                                            <div className="partner-logo-holder justify-content-center align-items-center col-12 px-20">
                                                <h4>Values</h4>
                                                <p className='text-white'>
                                                    We work to create a safe space based on trust, equity, transparency, inclusivity and sustainable systems.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide background">
                                    <div className="">
                                        <div className="col-12 col-xxl-10 offset-xxl-1 my-5 my-lg-3">
                                            <div className="partner-logo-holder justify-content-center align-items-center col-12 px-20">
                                                <h4>Strategies</h4>
                                                <p className='text-white'>
                                                    Build capacities to make decisions about their bodies among adolescents &amp; young persons across gender and intersection of existing diversities.<br /><br />
                                                    Capacity building of stakeholders like parents, teachers, CSOs, service providers to understand the need of young people in respect to their bodies, to support availability of services and information without stigma, taboo or judgement.<br /><br />
                                                    Mobilise and empower young people through leadership programs centred around peer learning for better access services, information and informed choices through workshops.
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination bullets-big mt-4 mb-5"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                    <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                        <div className="local-scroll mb-30 justify-self-center">
                            <a href="javascript:void(0);" className="btn btn-mod btn-color btn-small btn-hover-anim rounded">
                                <span className='font-bold'>See Our Work</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* End About Us Section */}

                <Script id="page-script">{`

                    $(document).ready(function () {

                        // $('#nav-who-we-are').addClass('text-decoration-underline');
                        // $('#nav-who-we-are').addClass('active');

                        //Partner Logos Swiper
                        var about_us_swiper = new Swiper('#about-us-swiper', {
                            pagination: {
                                el: '.swiper-pagination',
                                dynamicBullets: true,
                                clickable: true
                            },
                            breakpoints: {
                                320: {
                                    navigation: {
                                        enabled: false
                                    },
                                },
                                992: {
                                    navigation: {
                                        enabled: true,
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev'
                                    },
                                }
                            }
                        });

                    });`}
                </Script>

                {/* Section 1 */}
                {/*<section className="page-section bg-white bg-scroll py-0" id="slum-to-school">
                    <div className="container"></div>
                    <div className="row g-0">
                        <div className="col-12 d-flex align-items-stretch order-lg-first">
                            <div className="w-100 rounded-0" id="relentless-banner"></div>
                        </div>
                    </div>
                </section>*/}
                {/* End Section 1 */}


                {/* Section 3 */}
                {/*<section className="page-section bg-white bg-scroll section-pt-auto pb-0">
                    <div className="container"></div>
                    <div className="row g-0">
                        <div className="d-flex justify-content-center align-items-center col-12 col-lg-6 col-xl-4">
                            <div className="d-flex rounded-0 position-relative px-5">
                                <div className="w-100 text-center text-lg-start max-vw-33">
                                    <h1
                                        className="hs-title-9 color-gradient-primary-3 narrow-text mb-50 mb-sm-20 wow fadeInUp">
                                        <span className="d-inline-block">
                                            <span>W</span>{" "}
                                            <span>h</span>{" "}
                                            <span>a</span>{" "}
                                            <span>t</span>{" "}
                                            <span className="nbsp">&nbsp;</span>&nbsp;
                                        </span>
                                        <span className="d-inline-block">
                                            <span>d</span>{" "}
                                            <span>r</span>{" "}
                                            <span>i</span>{" "}
                                            <span>v</span>{" "}
                                            <span>e</span>{" "}
                                            <span>s</span>{" "}
                                            <span className="nbsp">&nbsp;</span>&nbsp;
                                        </span>
                                        <span className="d-inline-block">
                                            <span>u</span>{" "}
                                            <span>s</span>{" "}
                                        </span>
                                    </h1>
                                    <p className="section-descr fw-light mb-60 mb-sm-40 wow fadeInUp p-text"
                                        data-wow-delay="0.15s">
                                        <b>190 million children</b> are enrolled in public schools of India and lack the
                                        essential skills to learn effectively.
                                    </p>
                                    <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                        <div className="local-scroll btn-wrapper mb-60">
                                            <a href="what-we-do/challenge.html"
                                                className="btn btn-mod btn-color-3 btn-small btn-full-round btn-hover-anim">
                                                <span>Challenge</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-8 d-flex align-items-stretch order-lg-first">
                            <div className="w-100 rounded-0">
                                <img src="labhya24storage.blob.core.windows.net/private/home/what-drives-us.jpg"
                                    srcSet="labhya24storage.blob.core.windows.net/private/home/what-drives-us.jpg 1x, labhya24storage.blob.core.windows.net/private/home/what-drives-us@2x.jpg 2x"
                                    alt="" className="wow fadeScaleOutIn w-100" data-wow-duration="1.3s" />
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* End Section 3 */}

                {/* Section 4 */}
                {/*<section className="page-section bg-white bg-scroll section-pt-auto py-0">
                    <div className="container"></div>
                    <div className="row g-0">
                        <div className="d-flex flex-column col-12 col-lg-6">
                            <div className="row g-0">
                                <div className="d-flex justify-content-center wow fadeInUp wch-unset" data-wow-delay="0.5s"
                                    data-wow-offset="0">
                                    <img id="star-01"
                                        src="labhya24storage.blob.core.windows.net/private/home/star.png" alt=""
                                        className="wow fadeScaleOutIn" data-wow-duration="1.3s" width="180" />
                                </div>
                            </div>
                            <div className="row g-0">
                                <div
                                    className="d-flex justify-content-center rounded-0 position-relative align-items-center px-5 py-5 py-none-md py-none-sm">
                                    <div className="d-flex flex-column w-100 text-center text-lg-start max-vw-40">
                                        <h1 id="pioneer-title"
                                            className="hs-title-9 color-gradient-primary-1 narrow-text mb-50 mb-sm-20 wow fadeInUp">
                                            <span className="pioneer-text d-inline-block">
                                                <span>P</span>{" "}
                                                <span>i</span>{" "}
                                                <span>o</span>{" "}
                                                <span>n</span>{" "}
                                                <span>e</span>{" "}
                                                <span>e</span>{" "}
                                                <span>r</span>{" "}
                                                <span>i</span>{" "}
                                                <span>n</span>{" "}
                                                <span>g</span>{" "}
                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                            </span>
                                            <span className="pioneer-text d-inline-block">
                                                <span>t</span>{" "}
                                                <span>h</span>{" "}
                                                <span>e</span>{" "}
                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                            </span>
                                            <span className="pioneer-text d-inline-block">
                                                <span>w</span>{" "}
                                                <span>e</span>{" "}
                                                <span>l</span>{" "}
                                                <span>l</span>{" "}
                                                <span>&#8209;</span>{" "}
                                                <span>b</span>{" "}
                                                <span>e</span>{" "}
                                                <span>i</span>{" "}
                                                <span>n</span>{" "}
                                                <span>g</span>{" "}
                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                            </span>
                                            <br />
                                                <span className="pioneer-text d-inline-block">
                                                    <span>m</span>{" "}
                                                    <span>o</span>{" "}
                                                    <span>v</span>{" "}
                                                    <span>e</span>{" "}
                                                    <span>m</span>{" "}
                                                    <span>e</span>{" "}
                                                    <span>n</span>{" "}
                                                    <span>t</span>{" "}
                                                    <span className="nbsp">&nbsp;</span>&nbsp;
                                                </span>
                                                <span className="pioneer-text d-inline-block">
                                                    <span>i</span>{" "}
                                                    <span>n</span>{" "}
                                                    <span className="nbsp">&nbsp;</span>&nbsp;
                                                </span>
                                                <span className="pioneer-text d-inline-block">
                                                    <span>I</span>{" "}
                                                    <span>n</span>{" "}
                                                    <span>d</span>{" "}
                                                    <span>i</span>{" "}
                                                    <span>a</span>{" "}
                                                </span>
                                        </h1>
                                        <p className="section-descr fw-light mb-60 mb-sm-50 wow fadeInUp p-text"
                                            data-wow-delay="0.15s">
                                            Labhya is a visionary nonprofit that has pioneered the well&#8209;being
                                            movement in India. We are dedicated to institutionalizing programs that
                                            improve the quality of education and well&#8209;being for children. We
                                            partner with governments to co&#8209;create and ensure the effective
                                            implementation of state&#8209;wide well&#8209;being programs that are
                                            integrated into the school day.
                                        </p>
                                        <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                            <div className="local-scroll btn-wrapper mb-60">
                                                <a href="what-we-do.html"
                                                    className="btn btn-mod btn-color btn-small btn-full-round btn-hover-anim">
                                                    <span>What we do</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="wow fadeInUp wch-unset" data-wow-delay="0.5s" data-wow-offset="0">
                                    <img id="cloud-02-01"
                                        src="labhya24storage.blob.core.windows.net/private/home/cloud-02.png" alt=""
                                        className="wow fadeScaleOutIn floating-image" data-wow-duration="1.3s"
                                        width="480" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex align-items-stretch justify-content-end">
                            <div className="w-100 rounded-0">
                                <img id="well-being-movement"
                                    src="labhya24storage.blob.core.windows.net/private/home/well-being-movement.jpg"
                                    srcSet="labhya24storage.blob.core.windows.net/private/home/well-being-movement.jpg 1x, labhya24storage.blob.core.windows.net/private/home/well-being-movement@2x.jpg 2x"
                                    alt="" className="wow fadeScaleOutIn w-100" data-wow-duration="1.3s" />
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* End Section 4 */}

                {/* Video Section */}
                {/*<Video videoUrl="labhya24storage.blob.core.windows.net/private/home/happiness-video.mp4" />*/}
                {/* End Video Section */}

                {/* Section 6 */}
                {/*<section className="page-section bg-white bg-scroll">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 text-center">
                                <h1 className="hs-title-9 color-gradient-primary-1 narrow-text mb-50 mb-sm-20 wow fadeInUp">
                                    <span className="d-inline-block">
                                        <span>O</span>{" "}
                                        <span>u</span>{" "}
                                        <span>r</span>{" "}
                                    </span>
                                    <span className="nbsp">&nbsp;</span>&nbsp;
                                    <span className="d-inline-block">
                                        <span>i</span>{" "}
                                        <span>m</span>{" "}
                                        <span>p</span>{" "}
                                        <span>a</span>{" "}
                                        <span>c</span>{" "}
                                        <span>t</span>{" "}
                                    </span>
                                </h1>
                                <div className="max-vw-36 mx-auto">
                                    <p className="section-descr fw-light mb-0 wow fadeInUp p-text" data-wow-delay="0.15s">
                                        Currently, Labhya partners with 3 Indian state governments to co&#8209;create <b
                                            className="color-primary-1">well&#8209;being programs</b> that enable 2.4
                                        million children to become effective learners!
                                    </p>
                                </div>
                                <div className="row mt-0 mb-3 mb-lg-5 g-3">
                                    <div className="col-12 col-lg-4">
                                        <img src="labhya24storage.blob.core.windows.net/private/home/children.png"
                                            alt="" className="wow fadeScaleOutIn mb-40 mb-sm-20" data-wow-duration="1.3s"
                                            width="180" />
                                        <h1 className="hs-title-9 color-primary-1 strong-title mb-20 mb-sm-20 wow fadeInUp">
                                            2.4 million
                                        </h1>
                                        <p className="section-descr fw-light mb-0 mb-md-40 wow fadeInUp"
                                            data-wow-delay="0.15s">
                                            <b>Children</b>
                                        </p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <img src="labhya24storage.blob.core.windows.net/private/home/teachers.png"
                                            alt="" className="wow fadeScaleOutIn mb-40 mb-sm-20" data-wow-duration="1.3s"
                                            width="180" />
                                        <h1 className="hs-title-9 color-primary-1 strong-title mb-20 mb-sm-20 wow fadeInUp">
                                            <span className="">150,000</span>+
                                        </h1>
                                        <p className="section-descr fw-light mb-0 mb-md-40 wow fadeInUp"
                                            data-wow-delay="0.15s">
                                            <b>Teachers</b>
                                        </p>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <img src="labhya24storage.blob.core.windows.net/private/home/government.png"
                                            alt="" className="wow fadeScaleOutIn mb-40 mb-sm-20" data-wow-duration="1.3s"
                                            width="180" />
                                        <h1 className="hs-title-9 color-primary-1 strong-title mb-20 mb-sm-20 wow fadeInUp">
                                            <span className="">22,000</span>+
                                        </h1>
                                        <p className="section-descr fw-light mb-0 mb-md-40 wow fadeInUp"
                                            data-wow-delay="0.15s">
                                            <b>Schools</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                    <div className="local-scroll btn-wrapper mt-60 mb-60 mb-sm-0">
                                        <a href="impact.html"
                                            className="btn btn-mod btn-color btn-small btn-full-round btn-hover-anim">
                                            <span>See our impact</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* End Section 6 */}

                {/* Logos Section */}
                {/*<section className="page-section bg-primary-1-a bg-scroll light-content">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-12 col-xl-10 offset-xl-1 text-center">
                                <h1 className="hs-title-9 mb-60 mb-sm-40 wow fadeInUp">Our partners and supporters</h1>
                                <div className="position-relative">
                                    <div className="swiper-container mb-0">
                                        <div className="inf-slider">
                                            <div className="inf-slider-track">
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/ecosystem-United%20Nations.png"
                                                    alt="UN" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/ecosystem-UNICEF.png"
                                                    alt="UNICEF" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/stakeholder-us_aid_white.png"
                                                    alt="USAID" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/stakeholder-FID_white.png"
                                                    alt="FID" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-mulago.png"
                                                    alt="Mulago" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-drk.png"
                                                    alt="DRK" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-harward.png"
                                                    alt="Harvard" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/stakeholder-echidna_white.png"
                                                    alt="Echidna Giving" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-LSE.png"
                                                    alt="LSE" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/Strategy%20%26%20ecosystem-%20Selena%20Gomez.png"
                                                    alt="Selena Gomez" style={{ maxWidth: 'initial' }} />
                                            </div>
                                            <div className="inf-slider-track">
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/ecosystem-United%20Nations.png"
                                                    alt="UN" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/ecosystem-UNICEF.png"
                                                    alt="UNICEF" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/stakeholder-us_aid_white.png"
                                                    alt="USAID" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/stakeholder-FID_white.png"
                                                    alt="FID" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-mulago.png"
                                                    alt="Mulago" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-drk.png"
                                                    alt="DRK" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-harward.png"
                                                    alt="Harvard" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/stakeholder-echidna_white.png"
                                                    alt="Echidna Giving" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/strategy-LSE.png"
                                                    alt="LSE" style={{ maxWidth: 'initial' }} />
                                                <img className="w-auto px-5"
                                                    src="labhya24storage.blob.core.windows.net/private/partners/logo_white/Strategy%20%26%20ecosystem-%20Selena%20Gomez.png"
                                                    alt="Selena Gomez" style={{ maxWidth: 'initial' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* End Logos Section */}

                {/* Donate Section */}
                {/*<section className="page-section bg-white bg-scroll py-0">
                    <div className="container position-relative"></div>
                    <div className="row g-0">
                        <div className="col-12 col-lg-7 d-flex align-items-stretch">
                            <div className="rounded-0">
                                <img src="labhya24storage.blob.core.windows.net/private/home/donate.jpg"
                                    srcSet="labhya24storage.blob.core.windows.net/private/home/donate.jpg 1x, labhya24storage.blob.core.windows.net/private/home/donate@2x.jpg 2x"
                                    alt="" className="wow fadeScaleOutIn w-100" data-wow-duration="1.3s" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center col-12 col-lg-5">
                            <div className="text-center px-4 rounded-0">
                                <h1 className="hs-title-9 color-primary-1 mt-0 mt-md-30 mb-30 mb-lg-20 wow fadeInUp">
                                    Every contribution&nbsp;
                                    <span className="color-gradient-primary-1 narrow-text-lg d-inline-block">
                                        <i>
                                            <span>c</span>{" "}
                                            <span>o</span>{" "}
                                            <span>u</span>{" "}
                                            <span>n</span>{" "}
                                            <span>t</span>{" "}
                                            <span>s</span>{" "}
                                        </i>
                                    </span>
                                </h1>
                                <p className="section-descr fw-light lh-lg max-vw-27 mx-auto mb-50 mb-lg-40 p-text">Support
                                    us in co&#8209;creating well&#8209;being programs for vulnerable children at scale.
                                </p>
                                <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                    <div className="local-scroll mb-0 mb-md-50">
                                        <a target="_blank" href="https://forms.gle/jJoUN8nPzHFFfRVG7"
                                            className="btn btn-mod btn-color btn-large btn-full-round btn-hover-anim">
                                            <span>Donate</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* End Donate Section */}


            </div>
        </main>
    )
}

export default page