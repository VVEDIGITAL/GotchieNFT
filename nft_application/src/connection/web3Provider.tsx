import React, {ReactNode} from 'react'
import { Web3ReactProvider } from "@web3-react/core";
import { connectors, metaMaskConnector } from "./metamask";

export default function Web3Provider({ children }: { children: ReactNode }) {
    metaMaskConnector.connectEagerly()

    return (
        <Web3ReactProvider connectors={connectors}>
            {children}
        </Web3ReactProvider>
    );
}