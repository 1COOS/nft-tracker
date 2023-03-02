import { WebhookClient, EmbedBuilder, Colors } from 'discord.js';
import { EmbedOptions } from '../utils/types';
import { ethers } from 'ethers';

import config from '../utils/config';

const webhookClient = new WebhookClient({
  id: config.discord.DISCORD_WEBHOOK_ID,
  token: config.discord.DISCORD_WEBHOOK_TOKEN,
});

export const webhook = async (embedOptions: EmbedOptions) => {
  const embed = new EmbedBuilder()
    .setColor(
      Colors[embedOptions.color] || embedOptions.color || Colors.Default,
    )
    .setAuthor({ name: embedOptions.network })
    .setTitle(embedOptions.title)
    .setURL(embedOptions.url)
    .setImage(embedOptions.tokenURI)
    // .setDescription(embedOptions.description)
    .addFields(
      { name: 'Contract', value: `${embedOptions.contractAddress}` },
      { name: 'Transaction', value: `${embedOptions.txUrl}` },
    );
  if (embedOptions.from && embedOptions.from != ethers.ZeroAddress) {
    embed.addFields({ name: 'From', value: `${embedOptions.from}` });
  }
  if (embedOptions.to && embedOptions.to != ethers.ZeroAddress) {
    embed.addFields({ name: 'To', value: `${embedOptions.to}` });
  }
  try {
    await webhookClient.send({ embeds: [embed] });
  } catch (err) {
    console.log(err);
  }
};
