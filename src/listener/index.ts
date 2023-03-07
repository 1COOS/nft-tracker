import { ethers } from 'ethers';
import { ERC721Abi } from '../utils/contract';
import { webhook } from '../discord/webhook';
import { createEmbedOptions } from '../discord/helper';
import { NetworkEnum } from '../utils/types';
import { getNFTMetadata } from '../utils/alchemy';
import config from '../utils/config';

export const listen = async (network: NetworkEnum) => {
  const provider = new ethers.providers.WebSocketProvider(
    config.provider[`${network}`],
  );

  const contractAddresses = config.contracts[`${network}`];

  contractAddresses.forEach((contractAddress: string) => {
    const contract = new ethers.Contract(contractAddress, ERC721Abi, provider);

    contract.on('Transfer', async (from, to, tokenId, event) => {
      try {
        const name = await contract.name();
        const symbol = await contract.symbol();
        const metadata = await getNFTMetadata(
          network,
          contractAddress,
          tokenId,
        );
        console.log(metadata);
        const embedOptions = createEmbedOptions(
          network,
          contractAddress,
          name,
          symbol,
          event.transactionHash,
          from,
          to,
          tokenId,
          metadata.contract.openSea?.imageUrl || metadata.media[0]?.gateway,
          metadata.description,
        );
        await webhook(embedOptions);
      } catch (e) {
        console.log(e);
      }
    });
  });
  console.log(`Listening on ${network} `);
};
