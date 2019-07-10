/**
 * Material-UI Treasury
 *
 * Layout-v1.1
 */
export { default as Header } from './Header';
export { default as Content } from './Content';
export { default as Root } from './Root';
export { default as Nav } from './Nav';
export { default as Footer } from './Footer';
export { default as presets } from './layoutPresets';

export const config = {
  navAnchor: 'left',
  navVariant: {
    xs: 'temporary',
    sm: 'persistent',
    md: 'persistent'
  },
  navWidth: {
    xs: 240,
    sm: 256,
    md: 256
  },
  collapsible: {
    xs: false,
    sm: false,
    md: false
  },
  collapsedWidth: {
    xs: 64,
    sm: 64,
    md: 64
  },
  clipped: {
    xs: true,
    sm: false,
    md: false
  },
  headerPosition: {
    xs: 'relative',
    sm: 'relative',
    md: 'sticky'
  },
  squeezed: {
    xs: true,
    sm: true,
    md: true
  },
  footerShrink: {
    xs: true,
    sm: true,
    md: true
  }
};
