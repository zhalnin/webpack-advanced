import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
    const isDev = Object.is(options.mode, 'development');

    const svgLoader = {
        test: /\.svg$/i,
        use: [{
            loader:'@svgr/webpack', 
            options: { 
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            }}],
    }
    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }
    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]___[local]' : '[hash:base64:8]'
            },
        },
    };

    const scssLoader = {
        test: /\.s?(a|c)ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoaderWithModules, 
            'sass-loader'],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader:'ts-loader',
                options: {
                    transpileOnly: isDev,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ],
        exclude: /(node_modules|bower_components)/,
    };

    return [
        assetLoader,
        scssLoader,
        tsLoader,
        svgLoader,
    ];
}