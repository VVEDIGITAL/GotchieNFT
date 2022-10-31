import token_logo from "../../../../assets/main/token-logo.webp";
import "./tokens.sass";

export function Tokens() {
  return (
    <section id="tokens" className="tokens">
      <div className="container">
        <h1>Tokens</h1>
        <h2>$GOTCHI Token</h2>
        <h3>
          $GOTCHI is a BEP20 main in-game token which is used for NFT minting,
          buying additional items, levelling up and buying Fun Lands. You earn
          it by visiting Fun Lands
        </h3>

        <div className="token-info">
          <div className="token-img">
            <img src={token_logo} alt="token-logo" />
          </div>
          <div className="text">
            <h3>
              Token Name: <span>Crypto Gotchies</span>
            </h3>
            <h3>
              Token Ticker: <span>$GOTCHI</span>
            </h3>

            <h3>
              Decimals: <span>9</span>
            </h3>
            <h3>
              Buy/Sell tax: <span>0%</span>
            </h3>

            <h3 className="address">
              Contract address: <br />{" "}
              <span>0xc234423fg2fhg423fh2442h3f4fg2234f243gfg</span>
            </h3>

            <div className="info-web">
              <div className="first">
                <a>
                  <h3>Documentation</h3>
                </a>
                <a>
                  <h3>Audits</h3>
                </a>
              </div>
              <div className="sec">
                <a>
                  <h3>Contract</h3>
                </a>
                <a>
                  <h3>Chart</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
