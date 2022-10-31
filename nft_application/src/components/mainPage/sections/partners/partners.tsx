import partners_mocha from "../../../../assets/main/partners.webp";

import "./partners.sass";

export function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <h1>Press & Partners</h1>
        <img src={partners_mocha} alt="partners mocha" />
      </div>
    </section>
  );
}
