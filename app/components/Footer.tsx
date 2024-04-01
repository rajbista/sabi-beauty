import FooterItem from "./FooterItem";
import Image from "next/image";

interface Props {
  scrollRef: any;
}
const Footer = () => {
  const contact = [
    { ref: "#", label: "2982 Ogden Ave, Aurora, IL 60504" },
    { ref: "#", label: "Phone: (331) 385-8356" },
    { ref: "#", label: "sabibrowandbeauty@gmail.com" },
  ];
  const businessHours = [
    { ref: "#", label: "MONDAY - SATURDAY" },
    { ref: "#", label: " 10 AM - 7 PM" },
    { ref: "#", label: "SUNDAY" },
    { ref: "#", label: "CLOSED" },
  ];
  const followUs = [
    { ref: "https://www.instagram.com/sabibrowandbeauty/", label: "InstaGram" },
    { ref: "https://www.facebook.com/sabibrowandbeauty", label: "Facebook" },
    { ref: "https://www.tiktok.com/@sabibrowandbeauty", label: "TikTok" },
  ];

  return (
    <footer className="footer grid footer__sections">
      <FooterItem
        title="Contact Us"
        icon="chevron"
        content={contact}
        expanded={true}
      />
      <FooterItem
        title="Business Hour"
        icon="chevron"
        content={businessHours}
      />
      <FooterItem title="Follow Us" icon="chevron" content={followUs} />

      <section className="collapsible__footer footer__brand">
        <Image src="/sabi.png" alt="Logo" width={180} height={40} priority />
        <p className="footer__copyright">Copyright &copy;</p>
      </section>
    </footer>
  );
};

export default Footer;
