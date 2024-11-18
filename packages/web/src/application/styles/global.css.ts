import { globalStyle } from '@vanilla-extract/css';
import { colors } from './theme/colors.css';

globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden'
});

globalStyle('body', {
  color: colors.foreground,
  background: colors.background,
  fontFamily: 'Arial, Helvetica, sans-serif',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
});

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
});