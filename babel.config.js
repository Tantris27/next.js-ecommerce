module.exports = {
  presets: [
    [
      'next/babel',
      '@babel/preset-typescript',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: ['@emotion/babel-plugin'],
};
