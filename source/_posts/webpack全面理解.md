---
title: webpack全面理解
date: 2017-05-05 22:40:12
tags: Webpack
---


# 什么是Webpack
Webpack是一个静态模块打包工具。将一切文件视为模块，可以像引入JavaScript文件一样，在代码中引入。



# Entry Points
入口点，就是打包的起始文件。有多种定义方式。
1. 单入口，使用字符串:

    ```js
    const config = {
        entry: './path/to/my/entry/file.js'
    };
    module.exports = config;
    ```
2. 多入口，使用对象语法：

    ```js
    const config = {
        entry: {
            app: './src/app.js',
            vendors: './src/vendors.js'
        }
    };
    ```

# Output
输出，告诉webpack怎样将编译后的文件写入磁盘。输出只有一个。
1. 基本用法:

    ```js
    const config = {
        output: {
            filename: 'bundle.js',
            path: '/home/proj/public/assets'
        }
    };
    module.exports = config;
    ```
2. 多入口点的用法:

    ```js
    {
        entry: {
            app: './src/app.js',
            search: './src/search.js'
        },
        output: {
            filename: '[name].js',
            path: __dirname + '/dist'
        }
    }
    // writes to disk: ./dist/app.js, ./dist/search.js
    ```

# Loaders
装载机，用于转换一个模块的源代码。类似于其他打包工具的任务功能。它允许你讲其他语言转换成JavaScript，或者像引入JavaScript文件一样引入图片，数据,CSS文件等。

1. 安装: `npm install --save-dev style-loader css-loader`

1. 配置:

    ```js
     module: {
        rules: [
        {
            test: /\.css$/,
            use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options: {
                modules: true
                }
            }
            ]
        }
        ]
    }
    ```

# Plugins
插件，是webpack的支柱，webpack本身就是创建在same plugin system之上的。它用来做loader不能做的事。

1. 插件的结构：是一个有apply属性的JavaScript对象。apply属性会被webpack编译器调用，用于整个编译周期。

2. 基本用法：

    ```js
    //installed via npm
    const HtmlWebpackPlugin = require('html-webpack-plugin'); 
    const webpack = require('webpack'); //to access built-in plugins
    const path = require('path');
    
    const config = {
        entry: './path/to/my/entry/file.js',
        output: {
            filename: 'my-first-webpack.bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({template: './src/index.html'})
        ]
    };
    module.exports = config;
    ```

3. 常用插件：

    * html-webpack-plugin（输出控制的插件）
        1. 安装: `npm install --save-dev html-webpack-plugin`
        2. 配置: 

    ```js
    const path = require('path');
    + const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
        entry: {
        app: './src/index.js',
        print: './src/print.js'
        },
    +   plugins: [
    +     new HtmlWebpackPlugin({
    +       title: 'Output Management'
    +     })
    +   ],
        output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
        }
    };
    ```

        3. 结论：使用该插件，每次创建会将index.html替换掉，自动引入多个入口的JavaScript文件。当我们在配置中新增、修改入口点时，就不用手动修改源代码。
    * clean-webpack-plugin(清理/dist文件夹)
        1. 安装: `npm install --save-dev clen-webpack-plugin`
        2. 配置：

              ```js
              const path = require('path');
              const HtmlWebpackPlugin = require('html-webpack-plugin');
               + const CleanWebpackPlugin = require('clean-webpack-plugin');
                          module.exports = {
                              entry: {
                              app: './src/index.js',
                              print: './src/print.js'
                              },
                              plugins: [
                      + new CleanWebpackPlugin(['dist']),
                                new HtmlWebpackPlugin({
                                    title: 'Output Management'
                                })
                              ],
                              output: {
                              filename: '[name].bundle.js',
                              path: path.resolve(__dirname, 'dist')
                              }
                         };
              ```

        3. 结论：创建之后，不会再有旧文件，只有刚生成的文件。
    * uglifyjs-webpack-plugin(Tree shaking插件，用于去除为使用的代码，以及最小化代码)
        1. 安装: `npm install --save-dev uglifyjs-webpack-plugin`
        2. 配置:

            ```js
            const path = require('path');
            + const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
            
            module.exports = {
                entry: './src/index.js',
                output: {
                    filename: 'bundle.js',
                    path: path.resolve(__dirname, 'dist')
                - }
                + },
                + plugins: [
                +   new UglifyJSPlugin()
                + ]
            };
            ```
        3. 结论：创建后，最小化了代码文件，并且没有将未使用的代码创建进来。就像一棵树，源代码像绿色的活着的叶子，死代码像秋天到了棕色的，死了的叶子，通过摇动这棵树，将死去的叶子摇下。
    * CommonsChunkPlugin(代码分裂插件)
        1. 安装: 属于webpack内建插件
        2. 配置: 

            ```js
            const path = require('path');
            + const webpack = require('webpack');
            const HTMLWebpackPlugin = require('html-webpack-plugin');
            
            module.exports = {
                entry: {
                index: './src/index.js',
                another: './src/another-module.js'
                },
                plugins: [
                new HTMLWebpackPlugin({
                    title: 'Code Splitting'
            -     })
            +     }),
            +     new webpack.optimize.CommonsChunkPlugin({
            +       name: 'common' // Specify the common bundle's name.
            +     })
                ],
                output: {
                filename: '[name].bundle.js',
                path: path.resolve(__dirname, 'dist')
                }
            }; 
            ```
        3. 结论: 在没有使用该插件时，配置了多个入口，每个入口中都会存在共同使用的模块，代码就出现了重复。使用之后，共同使用的代码，会被创建在一个新的，单独的文件中。

# Development
开发时，我们需要做一些设置，使开发变得容易。

1. Using source maps

    * 描述: 在使用webpack创建代码时，我们很难通过错误和警告去追踪源代码位置。
    * 配置: 

        ```js
        module.exports = {
            entry: {
            app: './src/index.js',
            print: './src/print.js'
            },
        +   devtool: 'inline-source-map',
            plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                title: 'Development'
            })
            ],
            output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
            }
        };
        ```
    3. 结论: 在devtool属性中配置 `inline-source-map`之后，我们将可以在控制台中找到出错的行数，并可以链接进源代码。

2. Using Watch Mode
    * 描述: 如果每次修改源代码，我们都要去手动创建一次，这是一件很麻烦的事。
    * 配置: 

      ```js
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          +"watch": "webpack --watch",
          "build": "webpack"
      },
      ```
    * 结论: 添加watch参数，每次修改源代码之后，webpack会帮忙自动创建。
3. Using webpack-dev-server
    * 描述: 提供一个简单的web服务器，并且能够自动刷新页面。
    * 安装: `npm install --save-dev webpack-dev-server`
    * 配置: 
    
      ```js
      const path = require('path');
      const HtmlWebpackPlugin = require('html-webpack-plugin');
      const CleanWebpackPlugin = require('clean-webpack-plugin');
      
      module.exports = {
          entry: {
          app: './src/index.js',
          print: './src/print.js'
          },
          devtool: 'inline-source-map',
      +   devServer: {
      +     contentBase: './dist'
      +   },
          plugins: [
          new CleanWebpackPlugin(['dist']),
          new HtmlWebpackPlugin({
              title: 'Development'
          })
          ],
          output: {
          filename: '[name].bundle.js',
          path: path.resolve(__dirname, 'dist')
          }
      };
      ```
     * 添加npm执行脚本: `"start": "webpack-dev-server --open"`

# Production
如何添加一个产品配置？我们需要将产品和开发时相同的配置提取出来，通过npm脚本传入不同的参数，在产品和开发时使用不同的webpack配置。

1. 安装: `npm install --save-dev webpack-merge`
2. 配置:

    ```js
    project: 
    
        webpack-demo
        |- package.json
        - |- webpack.config.js
        + |- webpack.common.js
        + |- webpack.dev.js
        + |- webpack.prod.js
        |- /dist
        |- /src
            |- index.js
            |- math.js
        |- /node_modules
    
    webpack.common.js
    
        + const path = require('path');
        + const CleanWebpackPlugin = require('clean-webpack-plugin');
        + const HtmlWebpackPlugin = require('html-webpack-plugin');
        +
        + module.exports = {
        +   entry: {
        +     app: './src/index.js'
        +   },
        +   plugins: [
        +     new CleanWebpackPlugin(['dist']),
        +     new HtmlWebpackPlugin({
        +       title: 'Production'
        +     })
        +   ],
        +   output: {
        +     filename: '[name].bundle.js',
        +     path: path.resolve(__dirname, 'dist')
        +   }
        + };
    
    webpack.dev.js
    
        + const merge = require('webpack-merge');
        + const common = require('./webpack.common.js');
        +
        + module.exports = merge(common, {
        +   devtool: 'inline-source-map',
        +   devServer: {
        +     contentBase: './dist'
        +   }
        + });
    
    webpack.prod.js
    
        + const merge = require('webpack-merge');
        + const webpack = require('webpack');
        + const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
        + const common = require('./webpack.common.js');
        +
        + module.exports = merge(common, {
        +   devtool: 'source-map,
        +   plugins: [
        +     new UglifyJSPlugin({
        +        sourceMap: true
        +    }),
        +     new webpack.DefinePlugin({
        +        'process.env.NODE_ENV': JSON.stringify    +     ('produdction)
        +      })
        +   ]
        + });
    
    NPM Scripts
    
        {
            "name": "development",
            "version": "1.0.0",
            "description": "",
            "main": "webpack.config.js",
            "scripts": {
        -     "start": "webpack-dev-server --open",
        +     "start": "webpack-dev-server --open --config webpack.dev.js",
        -     "build": "webpack"
        +     "build": "webpack --config webpack.prod.js"
            },
            "keywords": [],
            "author": "",
            "license": "ISC",
            "devDependencies": {
            "clean-webpack-plugin": "^0.1.17",
            "css-loader": "^0.28.4",
            "csv-loader": "^2.1.1",
            "express": "^4.15.3",
            "file-loader": "^0.11.2",
            "html-webpack-plugin": "^2.29.0",
            "style-loader": "^0.18.2",
            "webpack": "^3.0.0",
            "webpack-dev-middleware": "^1.12.0",
            "webpack-dev-server": "^2.9.1",
            "webpack-merge": "^4.1.0",
            "xml-loader": "^1.2.1"
            }
        }
    
    ```
# 其他功能：Split CSS

1. 安装: `npm install --save-dev extract-text-webpack-plugin`
2. 配置:

    ```js
    const ExtractTextPlugin = require("extract-text-webpack-plugin");
    
        module.exports = {
        module: {
            rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
                })
            }
            ]
        },
        plugins: [
            new ExtractTextPlugin("styles.css"),
        ]
    }
    ```

