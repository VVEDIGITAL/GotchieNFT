import { initializeConnector, Web3ReactHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import { MetaMask } from "@web3-react/metamask";

export const [metaMaskConnector, metaMaskHooks] = initializeConnector(
    (actions) => new MetaMask({ actions })
);

export const connectors: [Connector, Web3ReactHooks][] = [
    [metaMaskConnector, metaMaskHooks],
];
