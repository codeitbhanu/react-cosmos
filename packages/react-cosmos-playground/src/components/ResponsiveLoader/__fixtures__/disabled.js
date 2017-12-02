import ResponsiveLoader from '../index';

export default {
  component: ResponsiveLoader,

  props: {
    src: '/mock/loader/index.html',
    showResponsiveControls: false,
    onFixtureUpdate: args => console.log(args),
    fixture: {}
  }
};
