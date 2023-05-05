import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'
import Navibar from '../components/Navibar';

function About() {
  return (
    <div className="About">
      <Navibar />
      <br /> <br /> <br /> <br /> <br />
      <Container className='contact-info'>
        <Row>
          <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          </Col>
          <Col xl={5} lg={5} md={12} sm={12} xs={12}>
            <div className='contact-text'>
              <div className='contact-title'>
                <h3>About Us</h3>
              </div>
              <p>
                We are a team of experienced and dedicated lawyers committed to providing our clients with top-notch legal services.
                Our practice areas include <b>Legal compliance</b>, and we have a proven track record of achieving successful outcomes
                for our clients.
                <br /><br />
                At <b>AdvocateHub</b>, we understand that legal issues can be complex and overwhelming.
                That's why we take the time to understand each client's unique situation and tailor our services to meet their specific needs.
                We work closely with our clients to develop effective strategies and solutions, and we keep them informed and
                involved throughout the legal process.
                <br /><br />
                Our team is led by <b>Advocate Manmeet Verma</b>, who have years of experience in their
                respective practice areas. They are supported by a team of dedicated paralegals and staff who are committed
                to providing exceptional client service.
                <br /><br />
                We believe in building strong relationships with our clients based on trust, respect, and open communication.
                We strive to provide our clients with the highest level of professionalism and integrity, and we are committed
                to achieving the best possible results for them.
                <br /><br />
                If you need legal assistance or have any inquiries about our legal services, please do not hesitate to contact us.
                We would be happy to discuss your legal needs and provide you with a personalized solution.



              </p>
            </div>
            <form action="contact">
              <input type="submit" value="Contact Us" />
            </form>
            <br />

          </Col>
          <Col xl={3} lg={3} md={12} sm={12} xs={12}>
          </Col>
        </Row>
      </Container>
      <Footer />



    </div>
  );
}

export default About;
