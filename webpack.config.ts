import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import type {
  Arguments,
  Environment,
} from '@expo/webpack-config/webpack/types';

module.exports = async (env: Environment, argv: Arguments) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  return config;
};
