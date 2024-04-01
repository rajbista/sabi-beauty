import Icon from "./Icon";

interface Props {
  author: string;
  content: string;
}
const TestimonialItem = ({ author, content }: Props) => {
  return (
    <div className="card testimonial">
      <blockquote className="quote">
        <p className="quote__text">{content}</p>
        <footer className="media">
          <div className="media__image">
            <Icon name="line" />
          </div>
          <div className="media__body">
            <h3 className="media__title quote__author">{author}</h3>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

export default TestimonialItem;
