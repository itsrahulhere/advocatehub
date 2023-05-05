import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'

import Navibar from '../components/Navibar';

function Contact() {
  return (
    <div className="Contact">
      <Navibar />
      <br /> <br /> <br /> <br /> <br />
      <Container className='contact-info'>
        <Row>
          <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          </Col>
          <Col xl={5} lg={5} md={12} sm={12} xs={12}>
            <div className='contact-text'>
              <div className='contact-title'>
                <h3>Get in touch</h3>
              </div>
              <p>
              We welcome your questions, comments, and feedback. 
              If you need legal assistance or have any inquiries about our legal services,
              please get in touch with us using the contact form or the contact information provided below.
              </p>
            </div>
            <br />
            <form>
              Name<br />
              <input type="text" size="50" /><br />
              Phone number<br />
              <input type="text" size="50" /><br />
              Email<br />
              <input type="text" size="50" /><br />
              Message<br />
              <textarea name="w3review" rows="4" cols="52">

              </textarea>
              <br />
              <input type="submit" value="Send" />
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

export default Contact;
