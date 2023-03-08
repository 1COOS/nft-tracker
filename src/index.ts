import { NetworkEnum } from './utils/types';
import { initAccounts } from './utils/accounts';
import { listen } from './listener';

initAccounts();

listen(NetworkEnum.MAINNET).catch((err) => {
  console.log(`==== ${NetworkEnum.MAINNET} listener error ====`);
  console.error(err);
});

listen(NetworkEnum.POLYGON).catch((err) => {
  console.log(`==== ${NetworkEnum.POLYGON} listener error ====`);
  console.error(err);
});

listen(NetworkEnum.MUMBAI).catch((err) => {
  console.log(`==== ${NetworkEnum.MUMBAI} listener error ====`);
  console.error(err);
});
