module.exports = {
  docker:false,
  networks: {
    testnet: {
      host: 'https://wallet-main.confluxrpc.org',
      port: 12537,
      network_id: "1",
      privateKeys: [process.env.DEPLOYER_PRIVATE_KEY]
    }
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
}
