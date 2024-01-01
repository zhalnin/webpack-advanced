import webpack from 'webpack'; 
import { IBuildPaths, IEnvironment } from './config/build/types/types';
import { buildWebpack } from './config/build/buildWebpack';
import path from 'path';

export default (env: IEnvironment) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }
    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    });

    return config;
}