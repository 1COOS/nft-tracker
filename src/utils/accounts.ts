import { ethers } from 'ethers';
import config from './config';
import { NetworkEnum } from './types';

const mumbaiAccounts = config.accounts.MUMBAI;
const polygonAccounts = config.accounts.POLYGON;
const mainnetAccounts = config.accounts.MAINNET;

const mainnetMap = new Map<string, string>();
const polygonMap = new Map<string, string>();
const mumbaiMap = new Map<string, string>();

export const initAccounts = () => {
  mainnetAccounts?.forEach((account) => {
    const address = Object.keys(account)[0];
    const name = account[address];
    if (!mainnetMap.has(address.toLowerCase())) {
      mainnetMap.set(address.toLowerCase(), name);
    }
  });

  polygonAccounts?.forEach((account) => {
    const address = Object.keys(account)[0];
    const name = account[address];
    if (!polygonMap.has(address)) {
      polygonMap.set(address, name);
    }
  });

  mumbaiAccounts?.forEach((account) => {
    const address = Object.keys(account)[0];
    const name = account[address];
    if (!mumbaiMap.has(address.toLowerCase())) {
      mumbaiMap.set(address.toLowerCase(), name);
    }
  });
  console.log('mumbaiMap === ', mumbaiMap);
};
let accountMap: Map<string, string>;

export const getAddressName = (
  network: NetworkEnum,
  address: string,
): string => {
  accountMap = switchNetwork(network);
  let addressName = accountMap.get(address.toLowerCase());
  if (!addressName) {
    addressName = address;
  }
  return addressName;
};

export const hasAddress = (network: NetworkEnum, address: string): boolean => {
  accountMap = switchNetwork(network);
  return (
    accountMap.has(address.toLowerCase()) ||
    address === ethers.constants.AddressZero
  );
};

const switchNetwork = (network: NetworkEnum): Map<string, string> => {
  switch (network) {
    case NetworkEnum.MAINNET:
      accountMap = mainnetMap;
      break;
    case NetworkEnum.POLYGON:
      accountMap = polygonMap;
      break;
    case NetworkEnum.MUMBAI:
      accountMap = mumbaiMap;
      break;
    default:
  }
  return accountMap;
};
