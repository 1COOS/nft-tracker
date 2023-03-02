export const Networks = {
  MUMBAI: 'MUMBAI',
  POLYGON: 'POLYGON',
  MAINNET: 'MAINNET',
};

export interface EmbedOptions {
  color: string;
  title: string;
  url: string;
  tokenURI: string;
  description?: string;
  network: string;
  contractAddress: string;
  from?: string;
  to?: string;
  txUrl?: string;
}
