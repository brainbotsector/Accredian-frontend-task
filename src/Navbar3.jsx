import React , { useContext } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { ThemeContext } from './ThemeContext';
import './Navbar3.css';

const Navbar3 = () => {
  const { theme } = useContext(ThemeContext);

  const data = [
    { program: "Professional Certificate Program in Product Management", referrerBonus: "₹ 7,000", refereeBonus: "₹ 9,000" },
    { program: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹ 9,000", refereeBonus: "₹ 11,000" },
    { program: "Executive Program in Data Driven Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { program: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { program: "Executive Program in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { program: "Advanced Certification in Product Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
    { program: "Executive Program in Product Management and Project Management", referrerBonus: "₹ 10,000", refereeBonus: "₹ 10,000" },
  ];

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <div className="table-container">
        <div className="enrolled-indicator">
          <div className="enrolled-text" style={{ color: theme.color }}>Enrolled</div>
          <div className="enrolled-icon" style={{ color: theme.color }}>
            <div className="enrolled-ellipse" style={{ background: theme.color }}></div>
          </div>
        </div>
        <table className="styled-table" style={{ background: theme.background, color: theme.color }}>
          <thead>
            <tr>
              <th style={{ color: theme.color }}>Programs</th>
              <th style={{ color: theme.color }}>Referrer Bonus</th>
              <th style={{ color: theme.color }}>Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ background: theme.background, color: theme.color }}>
                <td>
                  <SchoolIcon className="icon" style={{ color: theme.color }} />
                  {item.program}
                </td>
                <td>{item.referrerBonus}</td>
                <td>{item.refereeBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="show-more-container">
          <button className="show-more-button" style={{ background: theme.background, color: theme.color }}>Show More</button>
        </div>
        <div className="refernow-container">
          <button className="refernow-button">Refer Now</button>
        </div>
      

      

      <div className="faq-section"  >
        <div className="faq-title" style = {{color : theme.color}}>Frequently Asked Questions</div>
        <div className="faq-item" style={{ background: theme.background, color: theme.color }}> 
          <div className="faq-heading">Eligibility</div>
          <div className="faq-content" style={{ background: theme.background, color: theme.color }}>
            <p>
              <span>Do I need to have prior Product Management and Project Management experience to enroll in the program?</span>
            </p>
          </div>
        </div>
        <div className="faq-item" style={{ background: theme.background, color: theme.color }}>
          <div className="faq-heading">How to use?</div>
          <div className="faq-content" style={{ background: theme.background, color: theme.color }}>
            <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
          </div>
        </div>
        <div className="faq-item" style={{ background: theme.background, color: theme.color }}>
          <div className="faq-heading">Terms & Conditions</div>
          <div className="faq-content" style={{ background: theme.background, color: theme.color }}>
            <p>What is the minimum system configuration required?</p>
          </div>
        </div>
      </div>
      </div>
      <div className="cta-grad">
        <div className="cta-circle"></div>
        
        <div className="cta-flex">
          <div className="cta-svg">
            <HeadphonesIcon className="cta-icon" style={{ width: '100px', height: '100px' }} /> 
          </div>
          
          <div className="cta-text">
            <div className="cta-heading1">Want to delve deeper into the program?</div>
            <div className="cta-heading4">Share your details to receive expert insights from our program team!</div>
          </div>
        </div>
        
        <div className="cta-button">
          <div className="cta-get-in-touch">Get in touch</div>
          <div className="cta-vector-button"></div>
        </div>
      </div>

<footer className="footer">
  <div className="footer-container">

    <div className="footer-section">
      <h4>Contact Us</h4>
      <p>Email: info@accredian.com</p>
      <p>Phone: +917969322507</p>
      <p>Email us (For Data Science Queries): admissions@accredian.com</p>
      <p>Email us (For Product Management Queries):pm@accredian.com</p>
      <p>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
    </div>
  
    <div className="footer-section">
      <h4>Social Media</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    
    <div className="footer-section">
      <h4>Programs</h4>
      <p>Data Science & AI</p>
      <p>Product Management</p>
      <p>Business Analytics</p>
      <p>Digital Transformation</p>
      <p>Project Management</p>
    </div>
    
    <div className="footer-section">
      <h4>Accredian - A Brand of FullStack Education Pvt Ltd</h4>
      <p>About Us</p>
      <p>Careers</p>
      <p>Blog</p>
    </div>
  </div>
  

  <div className="copyright">
    © 2024 Accredian - A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
  </div>
  </footer>
  </div>
  );
};

export default Navbar3;
