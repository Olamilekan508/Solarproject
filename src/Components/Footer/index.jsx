import React from 'react';
import "./Footer.css";
import { footer } from '../../data';
import { Link } from 'react-scroll';
import Logo from '../Logo';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">

                    {/* Footer route groups */}
                    {footer.map((list, index) => (
                        <div className="column" key={index}>
                            <h3 className="routes_name">{list.group}</h3>

                            <div className="routes_container">
                                {list.routes.map((route, idx) => (
                                    <Link
                                        to={route.id ?? ""} 
                                        key={idx}
                                        className="route_item"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        onClick={() => {
                                            if (!route.id) console.warn("Missing route ID:", route);
                                        }}
                                    >
                                        <span className="name">{route.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Newsletter + Logo */}
                    <div className="column">
                        <Logo />

                        <div className="newsletter">
                            <h3>Get weekly updates</h3>

                            <div className="control_container">

                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="control"
                                    aria-label="Email Address"
                                />

                                <button className="btn" type="button">
                                    Subscribe
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="copyright">
                <div className="container">
                    <h3>© All rights reserved – 2025</h3>
                    <p className="text_muted">
                        Built with love by Daud Sulaimon Olamilekan
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
