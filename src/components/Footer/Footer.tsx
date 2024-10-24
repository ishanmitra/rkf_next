const Footer = () => {
    return (

        <footer className="footer-2 bg-primary-1 pb-50">
            {/* Footer */}
            <div className="container position-relative">

                {/* Back to Top Link */}
                <div className="local-scroll position-relative z-index-1">
                    <a href="#top" className="link-to-top color position-absolute top-0 end-0 translate-middle-y">
                        <i className="mi-arrow-up"></i>
                        <span className="visually-hidden">Scroll to top</span>
                    </a>
                </div>
                {/* End Back to Top Link */}

                <div id="footer-container" className="page-section text-white">
                    <div className="row">

                        <div className="col-lg-6 mb-md-60">

                            <h4 className="mb-40 mb-sm-20 lh-md">
                                We are creating a global movement
                                <br />
                                for children’s well-being
                            </h4>

                            <div className="local-scroll">
                                <a href="build-with-us.html" className="btn btn-mod btn-white btn-medium btn-full-round btn-hover-anim">
                                    <span>Build with us</span>
                                </a>
                            </div>

                        </div>

                        <div className="col-lg-5 offset-lg-1 pt-10">
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <ul className="fw-menu-large fw-menu-text-medium clearlist">
                                        <li>
                                            <a href="build-with-us/careers.html">Careers</a>
                                        </li>
                                        <li>
                                            <a href="build-with-us/contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-6">
                                    <ul className="fw-menu-large fw-menu-text-medium clearlist">
                                        <li>
                                            <a href="our-stories.html">Impact Stories</a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="#">Donate</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Text */}
                <div className="row text-white">

                    <div className="col-md-6 mb-sm-40">
                        <div className="footer-2-social-links mb-30">
                            <a href="https://www.linkedin.com/company/rangeen-khidki-foundation/" title="Linkedin" rel="noopener nofollow" target="_blank">
                                <span className="visually-hidden">LinkedIn</span>
                                <i className="fa-linkedin"></i>
                            </a>
                            <a href="https://instagram.com/rangeenkhidki" title="Instagram" rel="noopener nofollow" target="_blank">
                                <span className="visually-hidden">Instagram</span>
                                <i className="fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/rangeenkhidkifoundation/" title="Facebook" rel="noopener nofollow" target="_blank">
                                <span className="visually-hidden">Facebook</span>
                                <i className="fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/RKhidki" title="X" rel="noopener nofollow" target="_blank">
                                <span className="visually-hidden">X</span>
                                <i className="fa-x-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCxDfIquYqPBchA9_xQR6azQ" title="YouTube" rel="noopener nofollow" target="_blank">
                                <span className="visually-hidden">YouTube</span>
                                <i className="fa-youtube"></i>
                            </a>
                            <a href="https://medium.com/@rangeenkhidki" title="Medium" rel="noopener nofollow" target="_blank">
                                <span className="visually-hidden">Medium</span>
                                <i className="fa-medium"></i>
                            </a>
                        </div>
                        <div className="legal-links">
                            {/* a className="legal-link" href="javascript:void(0);">
                        <span className="section-descr fw-light text-white">Legal & Finance</span>
                    </a>
                    <span-- className="text-white">&nbsp;&nbsp;|&nbsp;&nbsp;</span--> */}
                            <a className="legal-link" href="privacy-policy.html">
                                <span className="section-descr fw-light text-white">Privacy Policy</span>
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="col-md-6 text-md-end">
                        {/* Made with love for our children<br /> */}
                        © Rangeen Khidki Foundation 2024
                    </div>
                    {/* End Social Links */}

                </div>
                {/* End Footer Text */}
            </div>
        </footer>
    );
}

export default Footer;