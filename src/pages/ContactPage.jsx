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
          />
          
          <ContactCardComponent
          icon={InstagramIcon}
          label="Instagram"
          />
          
          <ContactCardComponent
          icon={EmailIcon}
          label="Gmail"
          />

          <ContactCardComponent
          icon={LinkedInIcon}
          label="LinkedIn"
          />
          
        </div>
      </section>
    </>
  );
}

export default ContactPage;
