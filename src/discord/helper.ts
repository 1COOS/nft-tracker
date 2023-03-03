import { ethers } from 'ethers';
import { EmbedOptions } from '../utils/types';
import config from '../utils/config';

export const createEmbedOptions = (
  network: string,
  contractAddress: string,
  name: string,
  symbol: string,
  txHash: string,
  from: string,
  to: string,
  tokenId: string,
  image: string,
  description: string,
) => {
  let title = 'Transfer';
  let color = 'Gold';

  const explorer = config.explorer[`${network}`];
  const url = `${explorer}/address/${contractAddress}`;
  const txUrl = `${explorer}/tx/${txHash}`;

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
    title: `${network} - ${symbol} #${tokenId} - ${title} `,
    url,
    name,
    network,
    contractAddress,
    txUrl,
    from,
    to,
    image,
    description,
  };
  return embedOptions;
};
