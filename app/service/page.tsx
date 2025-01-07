"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "../components/ServiceCard";

interface Props {
  scrollRef: any;
}

const Service = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const data = [
    {
      icon: "easy",
      title: "HAIR",
      content:
        "Our hair services for women include professional styling, cutting, and treatments tailored to your preferences. From trims to transformative makeovers, we ensure healthy, beautiful hair that enhances your look.",
      picture: "hair.jpg",
    },
    {
      icon: "easy",
      title: "THREADING",
      content:
        "Eyebrow threading is a traditional technique of eyebrow shaping and hair removal practiced for the centuries among the women of Asia and middle eastern countries. It is an alternative to waxing and tweezing, especially for sensitive skins.",
      picture: "threading.png",
    },
    {
      icon: "wordpress",
      title: "WAXING",
      content:
        "Experience smooth and hair-free skin with our top-notch body waxing services. We use high-quality products for a comfortable and effective waxing experience.",
      picture: "wax.png",
    },
    {
      icon: "clock",
      title: "EYELASHES",
      content:
        "Enhance your eyes with our eyelash services, including extensions and lifts. Our trained technicians create stunning, natural-looking lashes that complement your unique beauty.",
      picture: "makeup.png",
    },
    {
      icon: "computer",
      title: "FACIALS",
      content:
        "Indulge in our rejuvenating facials designed to pamper your skin and address specific concerns. We use premium skincare products to leave your skin refreshed and glowing.",
      picture: "facial.png",
    },
    {
      icon: "clock",
      title: "HENNA",
      content:
        "Express your style with our intricate henna and tattoo artistry. Whether it's a special occasion or a personal statement, our skilled artists create beautiful and lasting designs.",
      picture: "henna.png",
    },
  ];
  return (
    <section className="container services">
      <h1>OUR SERVICES</h1>

      {data.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          content={item.content}
          picture={item.picture}
        />
      ))}
    </section>
  );
};

export default Service;
