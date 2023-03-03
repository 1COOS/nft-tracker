import { Alchemy, Network } from 'alchemy-sdk';
import { NetworkEnum } from './types';
import config from '../utils/config';

const alchemyMumbai = new Alchemy({
  apiKey: config.alchemy.APP_KEY,
  network: Network.MATIC_MUMBAI,
});

const alchemyPolygon = new Alchemy({
  apiKey: config.alchemy.APP_KEY,
  network: Network.MATIC_MAINNET,
});

let alchemy: Alchemy;

export const getContractMetadata = async (
  network: NetworkEnum,
  contractAddress: string,
) => {
  alchemy = switchNetwork(network);
  return await alchemy.core.getTokenMetadata(contractAddress);
};

export const getNFTMetadata = async (
  network: NetworkEnum,
  contractAddress: string,
  tokenId: number,
) => {
  alchemy = switchNetwork(network);
  return await alchemy.nft.getNftMetadata(contractAddress, tokenId, {});
};

const switchNetwork = (network: NetworkEnum) => {
  switch (network) {
    case NetworkEnum.POLYGON:
      alchemy = alchemyPolygon;
      break;
    case NetworkEnum.MUMBAI:
      alchemy = alchemyMumbai;
      break;
    default:
  }
  return alchemy;
};
