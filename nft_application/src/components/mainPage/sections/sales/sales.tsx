import { i18n } from "@lingui/core";
import { Trans } from "@lingui/macro";
import coming_soon from "../../../../assets/main/coming-soon.webp";
import coming_soon_zh from "../../../../assets/main/coming-zh.webp";

import "./sales.sass";

export function Sales() {
  return (
    <section id="sales" className="sales">
      <div className="container">
        <h1>
          <Trans>New Updates</Trans>
        </h1>
        <img
          src={i18n._locale == "zh" ? coming_soon_zh : coming_soon}
          alt="in work img"
        />
      </div>
    </section>
  );
}
