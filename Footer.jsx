import React from 'react'
import { assets,apple_logoblack,google_playblack } from '../../assets/image/Assets'
import './footer.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


function Footer() {
    const Table1=["Zomato","Blinkit","District","Hyperpure","Feeding India", "Investor Relations"]
    const Table2=["Partner With Us","Apps For You"]
    const Table3=["Privacy","Security","Terms of Service","Help & Support","Report a Fraud","Blog"]
  return (
    <div className='footer'>
      <img src={assets.logoWhite} alt="" className='logo'/>

      <div className="footer-table1">
        <div>
            <p>Eternal</p>
            <div className='list'>
                {
                    Table1.map((item,index)=>(
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>
        <div>
            <p>For Restaurant</p>
            <div className='list'>
                {
                    Table2.map((item,index)=>(
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>
        <div>
            <p>For Delivery Partners</p>
            <div className='list'>
                {
                    Table2.map((item,index)=>(
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>

        <div>
            <p>Learn More</p>
            <div className='list'>
                {
                    Table3.map((item,index)=>(
                        <p>{item}</p>
                    ))
                }
            </div>
        </div>

        <div>
            <p>Social Links</p>
            <div className='last_list'>
                <div>
            <TiSocialLinkedinCircular style={{ fontSize: '20px'}} />
            <FaInstagram style={{ fontSize: '20px'}} />
            <FaYoutube style={{ fontSize: '20px'}} />
            <FaFacebook style={{ fontSize: '20px'}} />
            <FaSquareXTwitter style={{ fontSize: '20px'}} />
                </div>
                <div>
                    <img src={apple_logoblack.apple_logo_black} alt="" className='apple_logo' />
                    <img src={google_playblack.google_logo_black} alt="" className='google_logo' />
                </div>
            </div>
        </div>
      </div>

      <hr/>
      <div className='footer-para'>
        <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
       (Pradip Rathod) 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
