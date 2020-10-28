module.exports = {
  stories: [
    "../src/**/*.stories.ts"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    const rules = config.module.rules
    rules.shift()
    rules.unshift({
      test: /\.ts$/,
      use: 'ts-loader'
    })
    return config
  }
}
