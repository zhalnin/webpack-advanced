import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types/types';

export function buildDevServer({ port }: IBuildOptions): DevServerConfiguration {
    return {
        port: port ?? 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    }
}