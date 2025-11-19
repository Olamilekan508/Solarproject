import React from 'react'
import "./About.css"
import { company__photo } from '../../assets'
import {FaCheck} from 'react-icons/fa'
import { Link } from 'react-scroll'

const About = () => {
    return (
        <section id='about' >
           <div className='container'>
            <div className='column company_photo'>
                <img src={company__photo } alt="solarix"/>
            </div>
            <div className='column'>
                <h3 className='sub_title'>with 7+ Years Experience </h3>
                <h1>
                    Turning your <span className="g-text">vision</span>into
                    reality by focusing on the basic
                </h1>
                <p className='text_muted discription'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='group'>
                    {/*start row */}
                   <div className='row'>
                    <div className='icon_container'>
                      <FaCheck/>
                    </div>
                    <div className='details'>
                        <p className="text_muted">Consultation</p>
                        <h3>Free</h3>
                    </div>
                   </div>
                   {/*end row */}

                    {/*start row */}
                   <div className='row'>
                    <div className='icon_container'>
                      <FaCheck/>
                    </div>
                    <div className='details'>
                        <p className="text_muted">Expert</p>
                        <h3>Engineers</h3>
                    </div>
                   </div>
                   {/*end row */}

                    {/*start row */}
                   <div className='row'>
                    <div className='icon_container'>
                      <FaCheck/>
                    </div>
                    <div className='details'>
                        <p className="text_muted">Customer</p>
                        <h3>Support</h3>
                    </div>
                   </div>
                   {/*end row */}

                    {/*start row */}
                   <div className='row'>
                    <div className='icon_container'>
                      <FaCheck/>
                    </div>
                    <div className='details'>
                        <p className="text_muted">Quality</p>
                        <h3>Service</h3>
                    </div>
                   </div>
                   {/*end row */}
                  </div> {/*end group */} 

                  <div className='buttons_container'>
                    <Link to= "project"  smooth={true} className="btn">Explore</Link>
                     <Link to= "contact"  smooth={true} className="btn btn_primary">Get a quote</Link>
                  </div>

            </div>
           </div>
        </section>
    )
}

export default About