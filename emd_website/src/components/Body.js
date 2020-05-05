import React from "react";
import "../assets/style.css";

function Body() {
    return (
        
        <div>
            <div className="container">
            <div className="landing" id="landingSection">
                <h1>Welcome to Elite Media Design</h1>
                <p>Our vision is to create a business world full of prosperity, meaning, and connection for all.</p>
            </div>

            <br />

            <div className="about" id="aboutSection">
            <img src={require("../assets/images/henryJohn.jpg")} alt="henry and john" className="responsive" id="henryJohn"></img>

                <h2>About Us</h2>
                <p>EMD was founded in 2005 in a garage when two college roommates, Henry and John, put their minds together to create all things web related.</p>

                <p>EMD’s Mission Statement: 
                    We strive to deliver value in our service, and to understand with respect all of our clients needs and to provide a partnership that is created when we host our clients web services, develop their site, market their product/service or simply give them advice.
                </p>
            </div>

            <br />

            <div className="services" id="servicesSection">
                <h2>Services</h2>
                <hr />
                <p>We are proud to offer expert level service in the areas listed below:</p>
                <div className="row">
                    <div className="col-md-4">
                <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Website Creation and Management</li>
                    <li>eCommerce</li>
                    <li>Graphic Design</li>
                </ul>
                </div>

                <div className="col-md-4">
                <ul>
                    <li>Email Marketing and Advertising</li>
                    <li>Photography</li>
                    <li>Videography</li>
                </ul>
                </div>

                <img src={require("../assets/images/marketing.jpg")} alt="stock" className="responsive" id="marketing"></img>

                </div>
                <p>We have proudly worked with the following clients:</p>
                <div className="row text-center" id="clients">
                    <div className="col-md-1"></div>
                    <div className="col-md-2">Walmart</div>
                    <div className="col-md-2">Best Buy</div>
                    <div className="col-md-2">Fleet Farm</div>
                    <div className="col-md-2">Clam Outdoors</div>
                    <div className="col-md-2">Black Fish Gear</div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <br />

            <div className="instagram" id="instagramSection">
                <h2>Our Instagram Feed</h2>
            </div>

            <br />

            <div className="contact" id="contactSection">
                <h2>Contact Us</h2>
                <hr />
                <div className="row">
                    <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i className="fas fa-phone fa-3x mb-3"></i>
                        <div>(763)-123-1234</div>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-envelope fa-3x mb-3"></i>
                        <a className="d-block" href="mailto:info@elitemediadesign.com" target="_blank">info@elitemediadesign.com</a>
                    </div>
                    <div className="col-lg-4 mr-auto text-center">
                        <i className="fas fa-address-card fa-3x mb-3"></i>
                        <div>80 S 8th St, Suite #005 Minneapolis, MN 55402</div>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-6">
                        <label className="fieldtext">Name</label>
                        <input type="text" id="fname" name="firstname"></input>
                     </div>
            
                    <div className="col-md-6">
                        <label className="fieldtext">Email</label>
                        <input type="text" id="email" name="email"></input>
                    </div>
                </div>

                     <br />
            
                <div className="row">
                    <label classNameName="fieldtext">Message</label>
                     <textarea id="message" name="message"></textarea>
                </div>
            
                    <button type="submit" id="submit">Submit</button>
                </div>
            </div>

            </div>
    )
}

export default Body;
