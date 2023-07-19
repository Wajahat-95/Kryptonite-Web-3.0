// https://eth-ropsten.alchemyapi.io/v2/i7IhyfvObA_WO0u-_tR-FYZBsiWgCqnx

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/i7IhyfvObA_WO0u-_tR-FYZBsiWgCqnx',
      accounts: ['7cb97be5db8cd2ddc5a71ade08f6074bf4c3a615d69d577869ee6806c90373ad']
    }
  }
}