import config from '@/config';

interface State {
  navs: StoreState.Navs[];
}

const state: State = {
  navs: config.nav,
};

export default state;
