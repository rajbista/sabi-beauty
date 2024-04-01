interface Props {
  color: string;
  size: string;
  link: string;
  label: string;
}

const Link = ({ link = "#", color, size, label }: Props) => {
  const style = `link-arrow link--${color} link--${size}`;
  return (
    <a href={link} className={style}>
      {label}
    </a>
  );
};

export default Link;
