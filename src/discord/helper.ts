import { ethers } from 'ethers';
import { EmbedOptions, Networks } from '../utils/types';
import config from '../utils/config';

export const createEmbedOptions = (
  network: string,
  contractAddress: string,
  symbol: string,
  txHash: string,
  from: string,
  to: string,
  tokenId: string,
  tokenURI: string,
) => {
  let title = 'Transfer';
  let color = 'Gold';

  const url = `${config.explorer[Networks.MUMBAI]}/address/${contractAddress}`;
  const txUrl = `${config.explorer[Networks.MUMBAI]}/tx/${txHash}`;

  if (from === ethers.ZeroAddress) {
    title = 'Mint';
    color = 'Aqua';
  }
  if (to === ethers.ZeroAddress) {
    title = 'Burn';
    color = 'DarkGrey';
  }

  const embedOptions: EmbedOptions = {
    color,
    title: `${symbol} #${tokenId} - ${title} `,
    url,
    network,
    contractAddress,
    txUrl,
    from,
    to,
    tokenURI,
  };
  return embedOptions;
};
