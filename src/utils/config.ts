import { config } from 'dotenv';
import fs from 'fs';
import YAML from 'yaml';
import Constants from './constants';

const file = fs.readFileSync('config.yaml', 'utf8');
const y = YAML.parse(file);

config({ path: '.env' });

export default {
  explorer: {
    MAINNET: `${Constants.Mainnet.EXPLORER}`,
    POLYGON: `${Constants.Polygon.EXPLORER}`,
    MUMBAI: `${Constants.Mumbai.EXPLORER}`,
  },
  provider: {
    MAINNET: `${Constants.Mainnet.ALCHEMY_PROVIDER}/${process.env.ALCHEMY_APP_KEY}`,
    POLYGON: `${Constants.Polygon.ALCHEMY_PROVIDER}/${process.env.ALCHEMY_APP_KEY}`,
    MUMBAI: `${Constants.Mumbai.ALCHEMY_PROVIDER}/${process.env.ALCHEMY_APP_KEY}`,
  },
  contracts: {
    MAINNET: y.networks.mainnet.contracts,
    POLYGON: y.networks.polygon.contracts,
    MUMBAI: y.networks.mumbai.contracts,
  },
  discord: {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_WEBHOOK_ID: process.env.DISCORD_WEBHOOK_ID,
    DISCORD_WEBHOOK_TOKEN: process.env.DISCORD_WEBHOOK_TOKEN,
  },
  alchemy: {
    APP_KEY: process.env.ALCHEMY_APP_KEY,
  },
  logger: {
    level: 'debug',
  },
};
