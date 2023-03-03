import { NetworkEnum } from './utils/types';
import { listen } from './listener';

listen(NetworkEnum.MUMBAI).catch((err) => {
  console.log(`==== ${NetworkEnum.MUMBAI} listener error ====`);
  console.error(err);
});

listen(NetworkEnum.POLYGON).catch((err) => {
  console.log(`==== ${NetworkEnum.POLYGON} listener error ====`);
  console.error(err);
});
