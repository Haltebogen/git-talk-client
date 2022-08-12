const path = require('path');
module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    // 'storybook-addon-styled-component-theme',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'babel-loader',
    });

    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/buttons': path.resolve(__dirname, '../src/components/atoms/buttons'),
      '@/boxes': path.resolve(__dirname, '../src/components/atoms/boxes'),
      '@/inputs': path.resolve(__dirname, '../src/components/atoms/inputs'),
      '@/logos': path.resolve(__dirname, '../src/components/atoms/logos'),
      '@/resources': path.resolve(__dirname, '../src/components/atoms/resources'),
      '@/contents': path.resolve(__dirname, '../src/components/atoms/contents'),
      '@/molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@/organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@/icons': path.resolve(__dirname, '../src/assets/icons'),
    };

    return config;
  },
};
