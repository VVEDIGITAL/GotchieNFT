import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Web3Provider from "./connection/web3Provider";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { en, zh } from "make-plural/plurals";
import { messages as messagesEn } from "./locales/en/messages.js";
import { messages as messagesZh } from "./locales/zh/messages.js";
import {
  detect,
  fromUrl,
  fromStorage,
  fromNavigator,
} from "@lingui/detect-locale";

i18n.loadLocaleData({
  en: { plurals: en },
  zh: { plurals: zh },
});

const DEFAULT_FALLBACK = () => "en";

const result = detect(
  fromUrl("lang"),
  fromStorage("lang"),
  fromNavigator(),
  DEFAULT_FALLBACK
);

console.log(result);

i18n.load({
  en: messagesEn,
  zh: messagesZh,
});

console.log(localStorage.getItem("language"));
if (localStorage.getItem("language") == null)
  if (result == "zh") {
    i18n.activate("zh");
  } else {
    i18n.activate("en");
  }
else {
  i18n.activate(String(localStorage.getItem("language")));
}

console.log(i18n._locale);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <I18nProvider i18n={i18n}>
    <BrowserRouter>
      <Web3Provider>
        <App />
      </Web3Provider>
    </BrowserRouter>
  </I18nProvider>
);
