require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remind erosion grid clog front skull'; 
let testAccounts = [
"0x8d94c8c62babbf2e0a377c0668cb2c850ac504e41513a5c37965faaabd14b9fb",
"0xea0746e99e5731589b38fa9e7321d57c519259f3f222b3a8c9d29b47762a2c14",
"0xd4b84442f530cd8d99143bb27ec299455d571657e527f9d3f1eae836e6eb7c7d",
"0x1e863aef76e7df33db7a8fd4eb24cd58ed40586c6d7cebae51ff3c9b67c7fad9",
"0x4937c97582af8d39b60f26d5b23ad7e1e3b42f8a92e0f08ca7c3b2736c2a9e4e",
"0x595de5fecaf5cee042915d9bdfb769faef544e9f45c0dd781edf5b251a7f142f",
"0x0168a465338079befc8adb4a58696bcd07342c9e30755d29d345ace3ff31aba6",
"0x97899bbc6bfede731e39a16511219411add8b7d729880f1787d15c6dce66cb37",
"0x2abe6309f34ad259d0720709f226303256292d7c5ef68187f512155a8195d1f7",
"0x6ee1beaa9616f28f8db177bc2470dd17ddbce16a46aed09513ecdf95d8276984"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


