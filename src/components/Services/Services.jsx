import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h3 className={styles.services_title}>My Services</h3>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>Web Devlopment</h4>
            <p>"Web Development" is an abbreviation for "web development" which is the process of creating and developing websites or applications on the Internet (World Wide Web) using various programming languages such as HTML, CSS, and JavaScript, including Various technologies and frameworks are used to create an optimized and modern user experience on a website or application. Web developers often use various tools and resources to develop and test websites so that they are. Good performance and user experience.</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>Web Design</h4>
            <p>"Web Design" is the process of designing and creating the appearance of a website or application. To have beautiful graphics and be easy to use. This includes structuring web pages and other elements that make a website look good and perform well.</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>Web Mobile</h4>
            <p>"Web Mobile" is the development of websites or applications that are suitable for use on mobile devices such as smartphones or tablets, focusing on a good user experience on small screens.</p>
        </div>
      </div>
    </div>
  )
}

export default Services