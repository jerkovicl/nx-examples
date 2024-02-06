import { composePlugins, withNx } from '@nx/webpack';

// Nx plugins for webpack.
export default composePlugins(withNx(), (config, { options, context }) => {
  // Update the webpack config as needed here.
  // e.g. config.plugins.push(new MyPlugin())
  // For more information on webpack config and Nx see:
  // https://nx.dev/packages/webpack/documents/webpack-config-setup
  return config;
});
