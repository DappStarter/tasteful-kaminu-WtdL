require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remember history hope enter outer general'; 
let testAccounts = [
"0x723a59182a77464c2df8677064b014479f117a18e7ef079b1ad69b7826ab4e01",
"0xbefd195f68a76cba8b806f0e0a94424d761b1350531e68ec864ac46807f6351a",
"0xc0845e18147e6e87205ca6d36ca99f462f784cdea61c2c0131f6514b995f08f2",
"0x5f7c67977a7aacfbb60ede2cee32ca08d8998b9ad36ef24e7355c29448f81ae6",
"0xe146a0c919b461dd0dd767f552f4dedc71d3d0e38dc38612c2c8b97094c05633",
"0x7163a3a1f0d18f1c465905968fa6aa3bc8fdf9a160fac5ed74b44789dec42a72",
"0x4f89e7cc2ea8b7eeec44323d16209abdf4c2ed23833324f53b9567f625c8e6b1",
"0x79810954f0483899e02c45f66f23c3fc3ce42ed0d3b03728874b346c5056a0f7",
"0x354acb203ba245ac3b62cb812fc1891c9c1123e9de6f5e7b5f321d1cbf433c25",
"0x4a92faf454540e6be68efc8ef3dca4ee1f8fade7d3e7acfdff53ead6295fe47c"
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


