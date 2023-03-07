export enum NetworkEnum {
  MAINNET = 'MAINNET',
  POLYGON = 'POLYGON',
  MUMBAI = 'MUMBAI',
}

export interface EmbedOptions {
  color: string;
  title: string;
  url: string;
  name: string;
  icon: string;
  image: string;
  description?: string;
  network: string;
  contractAddress: string;
  from?: string;
  to?: string;
  txUrl?: string;
}
