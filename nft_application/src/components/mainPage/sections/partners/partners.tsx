import solid_proof from "../../../../assets/main/SolidProof.png";
import pink_sale from "../../../../assets/main/PinkSale.webp";
import coin_scope from "../../../../assets/main/CoinScope.webp";

import "./partners.sass";

export function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="container">
        <h1>Press & Partners</h1>
        <div className="partners-img">
          <a href="https://www.pinksale.finance/">
            <img src={pink_sale} alt="partners mocha" />
          </a>
          <a href="https://www.coinscope.co">
            <img src={coin_scope} alt="partners mocha" />
          </a>
          <a href="https://solidproof.io/">
            <img src={solid_proof} alt="partners mocha" />
          </a>
        </div>
      </div>
    </section>
  );
}
