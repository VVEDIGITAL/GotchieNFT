import { Trans } from "@lingui/macro";
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
        <h1>
          $GOTCHI <Trans>Token</Trans>
        </h1>
        <h3>
          <Trans>
            $GOTCHI is a BEP20 main in-game token which is used for NFT minting,
            buying additional items, levelling up and buying Fun Lands. You earn
            it by visiting Fun Lands
          </Trans>
        </h3>

        <div className="token-info">
          <div className="token-img">
            <img src={token_logo} alt="token-logo" />
          </div>
          <div className="text">
            <h3>
              <Trans>Token Name:</Trans> <span>Crypto Gotchies</span>
            </h3>

            <h3>
              <Trans>Token Ticker:</Trans> <span>$GOTCHI</span>
            </h3>

            <h3>
              <Trans>Decimals:</Trans>{" "}
              <span>
                <Trans>9</Trans>
              </span>
            </h3>

            <h3>
              <Trans>Buy/Sell tax:</Trans>{" "}
              <span>
                <Trans>0%</Trans>
              </span>
            </h3>

            <h3 className="address">
              <Trans>Contract address:</Trans> <br />{" "}
              <span onClick={copyText}>
                0xEb19D1e8BCE5C4D6f4c78D984287b99aA9aEc0B6
              </span>
            </h3>

            <h3 className="copy">
              {isCopied ? (
                <Trans>Copied</Trans>
              ) : (
                <a onClick={copyText}>
                  {" "}
                  <Trans>Click to copy</Trans>{" "}
                </a>
              )}
            </h3>

            <div className="info-web">
              <div className="first">
                <a href="https://cryptogotchies.gitbook.io/whitepaper/tokenomics">
                  <h3>
                    <Trans>Learn more</Trans>
                  </h3>
                </a>
                <a href="https://github.com/cyberscope-io/audits/blob/main/gotchi/audit.pdf">
                  <h3>
                    <Trans>Audits</Trans>
                  </h3>
                </a>
              </div>
              <div className="sec">
                <a href="https://bscscan.com/address/0xeb19d1e8bce5c4d6f4c78d984287b99aa9aec0b6">
                  <h3>
                    <Trans>Contract</Trans>
                  </h3>
                </a>
                <a href="https://poocoin.app/tokens/0xeb19d1e8bce5c4d6f4c78d984287b99aa9aec0b6">
                  <h3>
                    <Trans>Chart</Trans>
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
