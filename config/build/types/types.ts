export interface IBuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
};

export type TBuildMode = 'production' | 'development';

export type TBuildPlatform = 'mobile' | 'desktop';

export interface IBuildOptions {
    port: number;
    paths: IBuildPaths;
    mode: TBuildMode;
    analyzer?: boolean;
    platform: TBuildPlatform
};

export interface IEnvironment {
    mode?: TBuildMode,
    port?: number,
    analyzer?: boolean,
    platform?: TBuildPlatform
};