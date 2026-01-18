import ContactCardComponent from "../components/ContactCardComponent";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../components/IconComponent";

function ContactPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center mt-16 mb-10 px-4">
      <h1 className="text-4xl md:text-[4rem] font-bold text-center mb-10 md:mb-16">
        Get in Touch
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-3xl">
        <ContactCardComponent
          icon={FacebookIcon}
          label="Facebook"
          href="https://papernsalt.github.io/react-portfolio/"
        />

        <ContactCardComponent icon={InstagramIcon} label="Instagram" href="#" />

        <ContactCardComponent icon={EmailIcon} label="Gmail" href="#" />

        <ContactCardComponent icon={LinkedInIcon} label="LinkedIn" href="#" />
      </div>
    </section>
  );
}

export default ContactPage;
