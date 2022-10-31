import "./button.sass";

interface ButtonI {
  title: string;
}

export function Hero_button(title: ButtonI) {
  return (
    <button className="glow-on-hover" type="button">
      {title.title}
    </button>
  );
}
