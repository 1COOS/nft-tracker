import config from './config';
import { NetworkEnum } from './types';

const mumbaiAccounts = config.accounts.MUMBAI;

const mainnetMap = {};
const polygonMap = {};
const mumbaiMap = {};

mumbaiAccounts.forEach((account: string) => {
  const address = Object.keys(account)[0];
  const name = account[address];
  mumbaiMap[address] = name;
});

export const getName = (network: NetworkEnum, address: string): string => {
  let name;
  switch (network) {
    case NetworkEnum.MAINNET:
      name = mainnetMap[address];
      break;
    case NetworkEnum.POLYGON:
      name = polygonMap[address];
      break;
    case NetworkEnum.MUMBAI:
      name = mumbaiMap[address];
      break;
    default:
  }
  if (!name) {
    name = address;
  }
  return name;
};
