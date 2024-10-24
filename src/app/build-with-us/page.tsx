"use client";

import Script from "next/script"

const page = () => {
    return (
        <>
            <style jsx>{`
                #careers-form-wrapper {
                    margin-bottom: 4rem !important;
                }

                #careers-form-iframe {
                    width: 100% !important;
                    min-width: 42vw;
                    min-height: 125vh;
                }

                @media only screen and (min-width: 992px) {

                    #careers-form-wrapper {
                        margin-bottom: 0 !important;
                    }

                    #careers-form-iframe {
                        width: 100% !important;
                        min-width: 42vw;
                        min-height: 125vh;
                    }

                }
            `}</style>

            <main id="main">
                <div className="content-wrapper">


                    {/* Opportunities Modal */}
                    <div className="modal fade" id="opportunities_modal" tabIndex={-1} aria-labelledby="opportunities_modal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="opportunities_modal_title">Current Openings</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body mx-4 py-5">
                                    <div className="opportunities-box pretty-scroll pe-4">
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Research, Monitoring, Evaluation and Learning Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Research, Monitoring, Evaluation and Learning Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Uttarakhand Operations Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Uttarakhand Operations Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Tripura Operations Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Tripura Operations Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Operations Lead</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Delhi Operations Lead.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Policy, Partnerships, and Communications-Senior Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Policy, Partnerships, and Communications-Senior Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Media & PR Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Media &amp; PR Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Digital Communications Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Digital Communications Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row blog-page-title pb-4">
                                            <h6>Design and Branding Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Design and Branding Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="opportunity-row  pb-4">
                                            <h6>Audio Visuals Associate</h6>
                                            <a target="_blank" href="labhya24storage.blob.core.windows.net/private/documents/opportunities/Audio Visuals Associate.pdf" className="blog-item-more form-tip">View JD&nbsp;<i className="mi-chevron-right" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Opportunities Modal */}

                    {/* Home Section */}
                    <section id="banner">
                        <div className="container-full-width">
                            <div className="row g-0">
                                <div className="d-flex flex-column split-column-right py-10-vh col-12 col-lg-5 col-xl-4 col-xxl-4 col-xxxl-3 pe-0">
                                    <div className="row g-0 flex-basis-50">
                                        <div className="d-flex justify-content-center align-items-center wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                            <img src="labhya24storage.blob.core.windows.net/private/home/sun.png" alt="" className="" width="120" />
                                        </div>
                                    </div>
                                    <div className="row g-0 flex-basis-50">
                                        <div className="d-flex align-items-center position-relative rounded-0 p-0">
                                            <div className="d-flex justify-content-center w-100 text-center">
                                                <div className="max-vw-24 mx-5">
                                                    <h2 className="hs-title-6 color-primary-1 mb-30 mb-md-20 wow fadeInUp">
                                                        We are creating a global movement for children’s well&#8209;being
                                                    </h2>
                                                    <h1 className="d-none">Build with us!</h1>
                                                    <h1 className="hs-title-9 color-primary-1 mb-20 mb-md-50 wow fadeInUp">
                                                        <span className="color-gradient-primary-1 narrow-text">
                                                            <span className="d-inline-block">
                                                                <span>B</span>{" "}
                                                                <span>u</span>{" "}
                                                                <span>i</span>{" "}
                                                                <span>l</span>{" "}
                                                                <span>d</span>{" "}
                                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                                            </span>
                                                            <span className="d-inline-block">
                                                                <span>w</span>{" "}
                                                                <span>i</span>{" "}
                                                                <span>t</span>{" "}
                                                                <span>h</span>{" "}
                                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                                            </span>
                                                            <span className="d-inline-block">
                                                                <span>u</span>{" "}
                                                                <span>s</span>{" "}
                                                                <span>!</span>{" "}
                                                            </span>
                                                        </span>
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-7 col-xl-8 col-xxl-8 col-xxxl-9 d-flex align-items-stretch order-lg-first">
                                    <div className="split-image-left rounded-0">
                                        <img src="labhya24storage.blob.core.windows.net/private/careers/banner.jpg" srcSet="labhya24storage.blob.core.windows.net/private/careers/banner.jpg 1x, labhya24storage.blob.core.windows.net/private/careers/banner@2x.jpg 2x" alt="Labhya Banner" className="wow fadeScaleOutIn" data-wow-duration="1.3s" fetchPriority="high" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Home Section */}

                    {/* Section 2 */}
                    <section className="page-section bg-scroll section-pt-min pb-0" id="careers">
                        <div className="container"></div>
                        <div className="row bg-color-primary-1-b g-0">
                            <div className="d-flex flex-column justify-content-center col-12 col-lg-6">
                                <div className="d-flex row g-0">
                                    <div className="d-flex justify-content-center rounded-0 position-relative align-items-center px-5 py-5 py-none-md py-none-sm">
                                        <div className="d-flex flex-column w-100 text-center text-lg-start max-vw-30">
                                            <h1 className="hs-title-9 color-gradient-primary-1 narrow-text mb-50 mb-sm-20 wow fadeInUp">
                                                <span className="d-inline-block">
                                                    <span>C</span>{" "}
                                                    <span>a</span>{" "}
                                                    <span>r</span>{" "}
                                                    <span>e</span>{" "}
                                                    <span>e</span>{" "}
                                                    <span>r</span>{" "}
                                                    <span>s</span>{" "}
                                                </span>
                                            </h1>
                                            <p className="section-descr fw-light mb-50 mb-sm-20 wow fadeInUp" data-wow-delay="0.15s">
                                                Labhya is dedicatedly working towards children’s well&#8209;being, recognizing it as essential for enabling quality education outcomes. Join us, as we build a movement for brighter and healthier futures for all children!
                                            </p>
                                            <p className="section-descr fw-light mb-50 mb-sm-20 wow fadeInUp" data-wow-delay="0.15s">
                                                We are looking for proximate leaders to build with us!
                                            </p>
                                            <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                                <div className="local-scroll btn-wrapper mb-60">
                                                    <a href="javascript:void(0);" className="btn btn-mod btn-color btn-small btn-full-round btn-hover-anim" data-bs-toggle="modal" data-bs-target="#opportunities_modal">
                                                        <span>View our current openings</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex align-items-stretch justify-content-end">
                                <div className="w-100 rounded-0">
                                    <img id="well-being-movement" src="labhya24storage.blob.core.windows.net/private/careers/careers.jpg" srcSet="labhya24storage.blob.core.windows.net/private/careers/careers.jpg 1x, labhya24storage.blob.core.windows.net/private/careers/careers@2x.jpg 2x" alt="" className="wow fadeScaleOutIn w-100" data-wow-duration="1.3s" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Section 2 */}

                    {/* Section 3 */}
                    <section className="page-section bg-white bg-scroll section-pt-min pb-0" id="contribute">
                        <div className="container"></div>
                        <div className="row g-0">
                            <div className="d-flex flex-column justify-content-center col-12 col-lg-5">
                                <div className="row g-0">
                                    <div className="d-flex justify-content-center wow fadeInUp wch-unset" data-wow-delay="0.5s" data-wow-offset="0">
                                        <img id="star-01" src="labhya24storage.blob.core.windows.net/private/home/star.png" alt="" className="wow fadeScaleOutIn" data-wow-duration="1.3s" width="144" />
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-60 mt-md-40 g-0">
                                    <div className="d-flex justify-content-center align-items-center max-vw-33">
                                        <div className="text-center px-4 rounded-0">
                                            <h1 className="hs-title-9 color-gradient-primary-1 narrow-text mb-30 mb-lg-20 wow fadeInUp">
                                                <span className="d-inline-block">
                                                    <span>I</span>{" "}
                                                    <span>n</span>{" "}
                                                    <span>v</span>{" "}
                                                    <span>e</span>{" "}
                                                    <span>s</span>{" "}
                                                    <span>t</span>{" "}
                                                </span>
                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                                <span className="d-inline-block">
                                                    <span>i</span>{" "}
                                                    <span>n</span>{" "}
                                                </span>
                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                                <span className="d-inline-block">
                                                    <span>o</span>{" "}
                                                    <span>u</span>{" "}
                                                    <span>r</span>{" "}
                                                </span>
                                                <span className="nbsp">&nbsp;</span>&nbsp;
                                                <span className="d-inline-block">
                                                    <span>c</span>{" "}
                                                    <span>h</span>{" "}
                                                    <span>i</span>{" "}
                                                    <span>l</span>{" "}
                                                    <span>d</span>{" "}
                                                    <span>r</span>{" "}
                                                    <span>e</span>{" "}
                                                    <span>n</span>{" "}
                                                    <span>!</span>{" "}
                                                </span>
                                            </h1>
                                            <p className="section-descr fw-light lh-lg max-vw-33 mx-auto mb-50 mb-lg-40 p-text">
                                                We invite you to invest in our children and their futures!
                                            </p>
                                            <div className="wow fadeInUp wch-unset" data-wow-delay="0.3s" data-wow-offset="0">
                                                <div className="local-scroll mb-50 mb-lg-40">
                                                    <a target="_blank" href="https://forms.gle/jJoUN8nPzHFFfRVG7" className="btn btn-mod btn-color btn-large btn-full-round btn-hover-anim">
                                                        <span>Donate</span>{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 d-flex align-items-stretch order-lg-first">
                                <div className="w-100 rounded-0">
                                    <img src="labhya24storage.blob.core.windows.net/private/careers/invest.jpg" alt="" className="wow fadeScaleOutIn w-100" data-wow-duration="1.3s" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Section 3 */}

                    {/* Contact Section */}
                    <section className="page-section bg-color-primary-1-b bg-scroll section-pt-min" id="contact">
                        <div className="container"></div>
                        <div className="row g-0">
                            <div className="d-flex flex-column justify-content-center col-12 col-lg-6 mb-5 mb-lg-0" id="careers-form-wrapper">
                                <div className="d-flex justify-content-center rounded-0 position-relative align-items-center px-4 px-lg-5 pt-3">
                                    <div className="d-flex flex-column w-100 text-center text-lg-start max-vw-24">
                                        <h1 className="hs-title-9 color-gradient-primary-1 narrow-text mb-50 mb-sm-20 wow fadeInUp">
                                            <span className="d-inline-block">
                                                <span>C</span>{" "}
                                                <span>o</span>{" "}
                                                <span>n</span>{" "}
                                                <span>t</span>{" "}
                                                <span>a</span>{" "}
                                                <span>c</span>{" "}
                                                <span>t</span>{" "}
                                            </span>
                                            <span className="nbsp">&nbsp;</span>&nbsp;
                                            <span className="d-inline-block">
                                                <span>u</span>{" "}
                                                <span>s</span>{" "}
                                            </span>
                                        </h1>
                                        <p className="section-descr fw-light color-primary-1 mb-30 mb-sm-20 wow fadeInUp" data-wow-delay="0.15s">
                                            <b>We would love to hear from you!</b>
                                        </p>
                                        <p className="section-descr fw-light mb-60 mb-sm-50 wow fadeInUp p-text" data-wow-delay="0.15s">
                                            If you’re interested in connecting with our team or would like to learn more about Labhya, please fill in the form below.
                                        </p>
                                        <form className="form contact-form" id="contact_form">
                                            <input type="hidden" name="_token" value="tI8hFqJOMLMpVPOG922aYbxu2uhPjeITnAOpAvok" autoComplete="off" />                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Enter your name" pattern=".{3,100}" required aria-required="true" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="Enter your email" pattern=".{5,100}" required aria-required="true" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea name="message" id="message" className="input-lg round form-control" style={{ height: "132px" }} placeholder="Enter your message"></textarea>
                                            </div>
                                            <div id="result" role="region" aria-live="polite" aria-atomic="true"></div>
                                            <div className="row">
                                                <div className="col-12 mt-sm-20">
                                                    <div className="pt-3">
                                                        <button type="submit" className="submit_btn btn btn-mod btn-color btn-medium btn-round btn-hover-anim" id="submit_btn" aria-controls="result">
                                                            <span>Send Message</span>{" "}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column col-12 col-lg-6">
                                <div className="d-flex justify-content-center rounded-0 position-relative px-5 py-5 py-none-md py-none-sm" style={{ height: "-webkit-fill-available" }}>
                                    <div className="d-flex flex-column justify-content-between align-items-center max-vw-24">
                                        <div className="text-center text-lg-start pt-5" style={{ width: "max-content" }}>
                                            <div className="mb-60 mb-sm-50">
                                                <img src="labhya24storage.blob.core.windows.net/private/logo.png" alt="" srcSet="labhya24storage.blob.core.windows.net/private/logo.png 1x, labhya24storage.blob.core.windows.net/private/logo@2x.png 2x" width="144" />
                                            </div>

                                            <p className="section-descr fw-light mb-60 wow fadeInUp" data-wow-delay="0.15s">
                                                Email Us
                                                <br />
                                                <a target="_top" href="mailto:culture@labhya.org" className="color-primary-1">
                                                    <b>culture@labhya.org</b>
                                                </a>
                                            </p>
                                        </div>
                                        <div className="d-flex">
                                            <img src="labhya24storage.blob.core.windows.net/private/careers/gratitude.png" srcSet="labhya24storage.blob.core.windows.net/private/careers/gratitude.png 1x, labhya24storage.blob.core.windows.net/private/careers/gratitude@2x.png 2x" alt="" className="wow fadeScaleOutIn" data-wow-duration="1.3s" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Contact Section */}


                </div>
            </main>

            <Script id="build-with-us-script">{`
                $(document).ready(function () {

                    $('#nav-build-with-us').addClass('text-decoration-underline');
                    $('#nav-build-with-us').addClass('active');

                });
            `}</Script>

        </>
    )
}

export default page