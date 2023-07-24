import LandingHeading from "../../components/landing-heading";
import ContactCard from "./components/contact-card";

const contactInfo = [
  {
    title: "Collaborate",
    email: "collaborate@example.com",
    phone: "123-456-1234",
  },
  {
    title: "Press",
    email: "press@example.com",
    phone: "123-456-1234",
  },
  {
    title: "Join our team",
    email: "careers@example.com",
    phone: "123-456-1234",
  },
  {
    title: "Say hello",
    email: "hello@example.com",
    phone: "123-456-1234",
  },
];

const ContactPage = () => {
  return (
    <section className="text-slate-300 flex flex-col px-8 md:px-12 mt-28 mb-20 h-full">
      <LandingHeading
        className="mx-auto text-center pb-8"
        title={"Get in touch"}
        subtitle={"Deserunt officia non pariatur velit adipisicing duis in."}
      />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {contactInfo.map((item) => (
          <ContactCard
            key={item.title}
            title={item.title}
            email={item.email}
            phone={item.phone}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactPage;
