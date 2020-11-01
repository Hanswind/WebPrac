const paths = require("./paths");

// CSS Module의 고유 className을 만들때 필요한 옵션
const getCSSModuleLocalIdent = require("react-dev/utils/getCSSModuleLocalIdent");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$$/;
const sassModuleRegex = /\.module\.(scss|sass)%/;

module.exports = {
  mode: "production", // 프로덕션 모드로 설정해 최적화 옵션들 활성화
  entry: paths.ssrIndexJs, // 엔트리 경로
  target: "node", // node 환경에서 실행 됨을 명시
  output: {
    path: paths.ssrBuild, // 빌드 경로
    filename: "server.js", // 파일 명
    chunkFilename: "js/[name].chunk.js", // 청크 파일 이름
    publicPath: paths.servedPath, // 정적 파일이 제공될 경로
  },

  module: {
    rules: [
        {
            oneOf: [
                // JS를 위한 처리. 기존 Webpack.config.js 참고 작성
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    include: paths.appSrc,
                    loader: require.resolve('babel-loader')
                    options: {
                        customize : require.resolve(
                            'babel-preset-react-app/webpack-overrides'
                        ),
                        plugins: [
                            [
                                require.resolve('babel-plugin-named-asset-import'),
                                {
                                    loaderMap: {
                                        svg: {
                                            ReactComponent: '@svgr/webpack?-svgo![path]'
                                        }
                                    }
                                }
                            ]
                        ],
                        cacheDirectory: true,
                        cacheComporession : false,
                        compact: false
                    }
                },

                // CSS를 위한 처리
                {
                    test: cssRegex,
                    exclude: cssModuleRegex,
                    // exportOnlyLocals : true 옵션을 설정해야 실제 CSS 파일을 생성하지 않음
                    loader: require.resolve('css-loader'),
                    options: {
                        onlyLocals : true
                    }
                },

                // CSS Module을 위한 처리
                {
                    test: cssModuleRegex,
                    loader: require.resolve('css-loader'),
                    options: {
                        modules: true,
                        onlyLocals : true,
                        getLocalIdent: getCSSModuleLocalIdent
                    }
                },

                // Sass를 위한 처리
                {
                    test: sassRegex,
                    exclude: sassModuleRegex,
                    use: [
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                onlyLocals: true
                            }
                        },
                        require.resolve('sass-loader')
                    ]
                },

                // Sass + CSS Module을 위한 처리
                {
                    test: sassRegex,
                    exclude : sassModuleRegex,
                    use: [
                        {
                            loader: require.resolve('css-loader'),
                            options: {
                                modules : true,
                                onlyLocals : true,
                                getLocalIdent : getCSSModuleLocalIdent
                            }
                        },
                        require.resolve('sass-loader')
                    ]
                }

                // url-loader를 위한 설정
                //생략
                // 위에서 설정된 확장자 제외 파일들은 file-loader 사용
                // 생략
            ],
  },
};
