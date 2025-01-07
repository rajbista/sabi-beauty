import Icon from "./Icon";
import Link from "./Link";

interface Props {
  icon?: string;
  title: string;
  content: string;
  picture: string;
}

const ServiceCard = ({ title, icon, content, picture }: Props) => {
  const imageSrc = `/${picture}`;
  return (
    <section className="grid grid--1x2 feature">
      <article className="feature__content" data-aos="fade-right">
        {icon && <Icon name={icon} />}
        <h2 className="content--heading">{title}</h2>
        <p className="content__tagline">{content}</p>
        {/* <Link color={""} size={""} link={""} label={"Learn More"} /> */}
      </article>
      <picture data-aos="zoom-in-left">
        {picture && (
          <picture>
            <img className="feature__image" src={imageSrc} alt={picture} />
          </picture>
        )}
      </picture>
    </section>
  );
};

export default ServiceCard;
