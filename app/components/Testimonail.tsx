import TestimonialItem from "../components/TestimonialItem";

const Testimonail = () => {
  const data = [
    {
      author: "Raj Bista",
      content: `Had an amazing underarm waxing experience at SABI Brow & Beauty today! The staff was friendly, the service was thorough and virtually painless. The salon is clean and inviting. I'm really happy with the results and will definitely be back for more services. Highly recommend! ⭐⭐⭐⭐⭐`,
    },
    // {
    //   author: "Zareen Skoien",
    //   content:
    //     "Thank you ladies for fixing my eyebrows. I am in love and can't wait to come back. Also, my Momma wants to come for a visit.",
    // },
    // {
    //   author: "Allena Chanel",
    //   content:
    //     "My firen and I stopped in last minute. She got eye brow threading and I got a henna tattoo. We are both pleased and will both be back!",
    // },
    // {
    //   author: 'Amber Kordik',
    //   content: "I LOVE & MISS BINU AND SABI SO MUCH!!! They sat there and took their time with my eyebrows, when they were done Sabi would stand over my eyebrows and basically study them to make sure they were even and make sure your eyebrows were SISTERS and not long lost cousins 😂 BINU also did the same thing, taking her time making sure everything was even & wasn’t uncommon if someone was having an issue for BINU to step over & help them. She made sure every customer left SATISFIED and happy with the results. I’d give ANYTHING to have them come down to Tennessee."
    // },
  ];
  return (
    <section className="block">
      <header className="block__header" data-aos="fade-up">
        <h1>TESTIMONIAL</h1>
      </header>
      {data.map((item, index) => (
        <TestimonialItem
          key={index}
          author={item.author}
          content={item.content}
        />
      ))}
    </section>
  );
};

export default Testimonail;
