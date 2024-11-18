import { createGlobalTheme } from '@vanilla-extract/css';

export const colors = createGlobalTheme(':root', {
	background: '#ffffff',
	foreground: '#171717',
	backgroundDark: '#0a0a0a',
	foregroundDark: '#ededed',
});
