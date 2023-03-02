import { ethers } from 'ethers';
import { ERC721Abi } from '../utils/contract';
import { webhook } from '../discord/webhook';
import { createEmbedOptions } from '../discord/helper';
import { Networks } from '../utils/types';
import config from '../utils/config';

try {
  const mumbaiProvider = new ethers.JsonRpcProvider(config.provider.MUMBAI);

  const mumbaiContracts = config.contracts.MUMBAI;

  mumbaiContracts.forEach((contractAddress: string) => {
    const contract = new ethers.Contract(
      contractAddress,
      ERC721Abi,
      mumbaiProvider,
    );
    console.log(`Listening on Mumbai contract ${contractAddress}`);
    contract.on('Transfer', async (from, to, tokenId, event) => {
      const tokenURI = await contract.tokenURI(tokenId);
      // const name = await contract.name();
      const symbol = await contract.symbol();

      const embedOptions = createEmbedOptions(
        Networks.MUMBAI,
        contractAddress,
        symbol,
        event.log.transactionHash,
        from,
        to,
        tokenId,
        tokenURI,
      );
      await webhook(embedOptions);
    });
  });
} catch (e) {
  console.log(e);
}
