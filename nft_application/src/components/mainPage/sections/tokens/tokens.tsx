import { useState } from "react";
import token_logo from "../../../../assets/main/token-logo.webp";
import "./tokens.sass";

export function Tokens() {
  const [isCopied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText("0x3902547fD2Ba8f0C74532B08fA7A929a73cEdf0B");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

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
              <span onClick={copyText}>
                0x3902547fD2Ba8f0C74532B08fA7A929a73cEdf0B
              </span>
            </h3>

            <h3 className="copy">
              {isCopied ? "Copied" : <a onClick={copyText}> Click to copy </a>}
            </h3>

            <div className="info-web">
              <div className="first">
                <a href="https://cryptogotchies.gitbook.io/whitepaper/tokenomics">
                  <h3>Learn more</h3>
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
