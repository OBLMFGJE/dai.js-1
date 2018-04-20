import tokens from '../tokens';
import contracts from '../contracts';

import dsEthToken_1 from '../abi/ds-eth-token/v1.json';
import erc20Token_1 from '../abi/erc20-token/v1.json';
import makerOtc_1 from '../abi/maker-otc/v1.json';
import top_1 from '../abi/dai/v1/top.json';
import tub_1 from '../abi/dai/v1/tub.json';

const contractAdresses = {
  GEM: '0x7ba25f791fa76c3ef40ac98ed42634a8bc24c238',
  GOV: '0x1c3ac7216250edc5b9daa5598da0579688b9dbd5',
  PIP: '0xb7092ee7a8c4c85431962662310bbdcd4fd519e9',
  PEP: '0xc0ee05307ae4a5316f34874a3525d10c94b3c217',
  PIT: '0x0000000000000000000000000000000000000123',
  ADM: '0x4986c24c7f752c2ac2d738f1270639dd9e9d7bf5',
  SAI: '0xc226f3cd13d508bc319f4f4290172748199d6612',
  SIN: '0xe9e2b40d676fc998ede8c676d9f529ccbbc13740',
  SKR: '0xa6164a2e88e258a663772ed4912a0865af8f6d06',
  DAD: '0x7b61731911e46da837e3dcd2d8797de684c8ced1',
  MOM: '0x603d52d6ae2b98a49f8f32817ad4effe7e8a2502',
  VOX: '0xe16bf7aafeb33cc921d6d311e0ff33c4faa836dd',
  TUB: '0xe82ce3d6bf40f2f9414c8d01a35e3d9eb16a1761',
  TAP: '0x6896659267c3c9fd055d764327199a98e571e00d',
  TOP: '0x2774031b3898fbe414f929b3223ce1039325e7dc'
};

const mapping = {
  [tokens.WETH] : [
    { version: 1, address: contractAdresses.GEM, abi: dsEthToken_1.interface, decimals: 18 },
  ],
  [tokens.PETH] : [
    { version: 1, address: contractAdresses.SKR, abi: erc20Token_1.interface, decimals: 18 },
  ],
  [tokens.DAI] : [
    { version: 1, address: contractAdresses.SAI, abi: erc20Token_1.interface, decimals: 18 },
  ],
  [tokens.MKR] : [
    { version: 1, address: '0x0000000000000000000000000000000000000001', abi: erc20Token_1.interface, decimals: 18 },
    { version: 2, address: contractAdresses.GOV, abi: erc20Token_1.interface, decimals: 18 },
  ],
  [contracts.TOP] : [
    { version: 1, address: contractAdresses.TOP, abi: top_1.interface },
  ],
  [contracts.TUB] : [
    { version: 1, address: contractAdresses.TUB, abi: tub_1.interface },
  ],
  [contracts.MAKER_OTC] : [
    { version: 1, address: '0x0aa4e9ba2d892307784c69e94f3b5d7b7aff4201', abi: makerOtc_1.interface }
  ]
};
export default mapping;