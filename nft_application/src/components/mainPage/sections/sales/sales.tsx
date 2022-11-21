import coming_soon from "../../../../assets/main/coming-soon.webp";

import "./sales.sass";

export function Sales() {
  return (
    <section id="sales" className="sales">
      <div className="container">
        <h1>New Updates</h1>
        <img src={coming_soon} alt="in work img" />
      </div>
    </section>
  );
}
