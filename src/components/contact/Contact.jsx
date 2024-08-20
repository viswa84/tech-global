import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import { Container } from "./styles";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>If you want to talk to me, don't hesitate to call me or send me a message.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:viswavishwanath5@gmail.com">Hello@viswavishwanath5@gmail.com</a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone No" />
          <a href="tel:+918464892914">(+91) 8464892914</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}