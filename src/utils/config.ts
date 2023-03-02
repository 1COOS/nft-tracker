import { config } from 'dotenv';
import fs from 'fs';
import YAML from 'yaml';

const file = fs.readFileSync('config.yaml', 'utf8');
const y = YAML.parse(file);

config({ path: '.env' });

export default {
  explorer: {
    MUMBAI: y.networks.mumbai.explorer,
  },
  provider: {
    MUMBAI: y.networks.mumbai.provider,
  },
  contracts: {
    MUMBAI: y.networks.mumbai.contracts,
  },
  discord: {
    DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_WEBHOOK_ID: process.env.DISCORD_WEBHOOK_ID,
    DISCORD_WEBHOOK_TOKEN: process.env.DISCORD_WEBHOOK_TOKEN,
  },
  logger: {
    level: 'debug',
  },
};
