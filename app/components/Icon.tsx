"use client";
interface Props {
  name: string;
  color?: string;
  circle?: boolean;
}

const Icon = ({ name, color = "primary", circle = false }: Props) => {
  const style = `icon icon--${color}`;
  const icon = (
    <svg className={style}>
      <use xlinkHref={`../assets/sprite.svg#${name}`}></use>
    </svg>
  );

  return circle ? <span className="icon-container">{icon}</span> : icon;
};

export default Icon;
