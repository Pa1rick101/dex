require('dotenv').config();

module.exports = {

  networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*"
      },
   },
  contracts_directory: "./blockchain/contracts",
  contracts_build_directory: './blockchain/abis',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
