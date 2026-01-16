import ContactCardComponent from "../components/ContactCardComponent";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from "../components/IconComponent";

function ContactPage() {
  return (
    <>
      <section className="mt-10">
        <h1 className="text-[4rem] text-center">Get in Touch</h1>

        <div className="grid grid-cols-2 gap-6">

          <ContactCardComponent
          icon={FacebookIcon}
          label="Facebook"
          href="https://papernsalt.github.io/react-portfolio/"
          />
          
          <ContactCardComponent
          icon={InstagramIcon}
          label="Instagram"
          href=""
          />
          
          <ContactCardComponent
          icon={EmailIcon}
          label="Gmail"
          href=""
          />

          <ContactCardComponent
          icon={LinkedInIcon}
          label="LinkedIn"
          href=""
          />
          
        </div>
      </section>
    </>
  );
}

export default ContactPage;
