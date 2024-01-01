import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { IBuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForksTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: IBuildOptions): Configuration['plugins']{
    const isDev: boolean = Object.is(mode, 'development');
    const isProd: boolean = Object.is(mode, 'production');

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ 
            template: paths.html
        }),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        })
    ]

    if(isDev){
        plugins.push(new webpack.ProgressPlugin());
        plugins.push(new ForksTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if(isProd){
        plugins.push(new MiniCssExtractPlugin({ 
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css',
        }));
    }

    if(analyzer){
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}