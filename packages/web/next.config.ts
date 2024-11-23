import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
	webpack: (config, { isServer }) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@shared': '@freedivah/shared'
		};
		return config;
	}
};

module.exports = withVanillaExtract(nextConfig);
