import abi from "./contract-abi.json"
export const contractAbi = abi.abi;
export const contractAddress = "0x416c73EE408c55D4E477fe5E101bb4AC7DF7241C";

export const networks = {
  BSC_MAINNET: {
    hex: "0x38",
    dec: 56
  },
  BSC_TESTNET: {
    hex: "0x61",
    dec: 97
  },
}

//export const network = networks.BSC_TESTNET;
export const network = networks.BSC_MAINNET;
