const NavPanel = () => {
    return (
        <nav className="main-nav sticky">
            {/* Navigation Panel */}
            {/* Hide animated class */}
            <div className="main-nav-sub container wow-menubar wch-unset animated">

                <div className="nav-logo-wrap d-flex position-static local-scroll">
                    <a href="/" className="logo align-self-center">
                        <img src="rangeenkhidki/site-logo-light.png" alt="" srcSet="rangeenkhidki/site-logo-light.png 1x" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-nav" role="button" tabIndex={0}>
                    <i className="mobile-nav-icon"></i>
                    <span className="visually-hidden">Menu</span>
                </div>

                {/* Main Menu */}
                <div className="inner-nav desktop-nav">
                    <ul id="left-nav" className="clearlist local-scroll justify-content-start">
                        {/*<li>
                            <a id="nav-who-we-are" className="nav-item mn-has-sub" href="who-we-are">About</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="who-we-are/story">Our story</a></li>
                                        <li><a href="who-we-are/goal">Our mission</a></li>
                                        <li><a href="who-we-are/team">Our leadership</a></li>
                                        <li><a href="who-we-are/partners">Our partners</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>*/}
                        <li>
                            <a id="nav-our-work" className="nav-item mn-has-sub" href="our-work">Our Work</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="what-we-do/challenge">Challenge</a></li>
                                        <li><a href="what-we-do/solution">Our solution</a></li>
                                        <li><a href="what-we-do/model">Our model</a></li>
                                        <li><a href="what-we-do/programs">Our programs</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-impact" className="nav-item mn-has-sub" href="impact">Impact</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="impact/overview">Impact overview</a></li>
                                        <li><a href="impact/stories">Impact stories</a></li>
                                        <li><a href="impact/reports">Impact reports</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-outreach" className="nav-item mn-has-sub" href="#">Resources</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="featured/global">Global</a></li>
                                        <li><a href="featured/news">In the news</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-build-with-us" className="nav-item mn-has-sub" href="#">Gallery</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="build-with-us/careers">Careers</a></li>
                                        <li><a href="build-with-us/contribute">Contribute</a></li>
                                        <li><a href="build-with-us/contact">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-build-with-us" className="nav-item mn-has-sub" href="#">Reports</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="build-with-us/careers">Careers</a></li>
                                        <li><a href="build-with-us/contribute">Contribute</a></li>
                                        <li><a href="build-with-us/contact">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-build-with-us" className="nav-item mn-has-sub" href="#">Team</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="build-with-us/careers">Careers</a></li>
                                        <li><a href="build-with-us/contribute">Contribute</a></li>
                                        <li><a href="build-with-us/contact">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-build-with-us" className="nav-item mn-has-sub" href="#">Our Registration Status</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="build-with-us/careers">Careers</a></li>
                                        <li><a href="build-with-us/contribute">Contribute</a></li>
                                        <li><a href="build-with-us/contact">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a id="nav-build-with-us" className="nav-item mn-has-sub" href="#">Reach Us</a>
                            <ul className="mn-sub mn-has-multi">
                                <li className="mn-sub-multi">
                                    <ul>
                                        <li><a href="build-with-us/careers">Careers</a></li>
                                        <li><a href="build-with-us/contribute">Contribute</a></li>
                                        <li><a href="build-with-us/contact">Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/*li><a id="nav-blog" className="nav-item" href="javascript:void(0);">Our Stories</a></li*/}

                        {/*--li className="desktop-nav-display">
                          <div className="vr mt-2"></div>
                      </li--> */}
                    </ul>
                </div>
                {/* End Main Menu */}

                {/* Main Menu */}
                <div className="inner-nav desktop-nav">
                    <ul id="right-nav" className="clearlist local-scroll justify-content-end">
                        <li className="d-flex align-items-center">
                            <a target="_blank" href="#" className="btn btn-mod btn-color btn-small btn-full-round btn-hover-anim pl-3 pr-3">Donate</a>
                        </li>
                    </ul>
                </div>
                {/* End Main Menu */}

            </div>
            {/* End Navigation Panel */ }
        </nav>
      )
  }

export default NavPanel