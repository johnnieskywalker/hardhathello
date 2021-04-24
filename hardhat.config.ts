import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
// import * as secrets from './secret';

require("@nomiclabs/hardhat-waffle");

const SOLIDITY_VERSION = "0.7.6";

module.exports = {
  solidity: SOLIDITY_VERSION,
};

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: SOLIDITY_VERSION, settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${secrets.INFURA_API_KEY_PROJECT_ID}`,
      accounts: [secrets.INFURA_SECRET_RINKEBY_PRIVATE_KEY],
    },
  }
}
export default config;
