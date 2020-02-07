# ali-fc-typescript-skeleton

> 阿里云函数计算 TypeScript 开发模板/项目骨架。适合开发微服务/Restful API/简易 Web 应用。

## 特性

- 语言：TypeScript
- 运行时：nodejs 10
- 代码打包：webpack
- 代码规范：eslint
- 测试框架：mocha
- 断言库：power-assert

## 准备

1. 安装 node

    ```bash
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
    nvm install 8
    ```

2. 安装 fun 工具

    ```bash
    npm install @alicloud/fun -g
    ```

fun 工具的某些子命令可能会用到 docker，所以你需要安装好 docker，具体参考文档：[Fun 安装教程](https://github.com/alibaba/funcraft/blob/master/docs/usage/installation-zh.md?spm=a2c4e.10696291.0.0.5c3119a4t5wfpp&file=installation-zh.md)。

## 基于此模板初始化你的项目骨架

```bash
fun init -n yourProject https://github.com/Jeff-Tian/ali-fc-typescript-skeleton.git
```

## 安装依赖

```bash
cd yourProject
npm install
```

## 自动化测试

```bash
npm test
```

## 编译

```bash
# 生成编译
npm run build

# 开发编译（这种编译方式不会进行代码混淆，并且生成 source map 信息，方便开发调试）
npm run dev
```

## 本地运行函数

```bash
fun local invoke demo/demo
```

## 运行调试函数

运行调试之前，请先用 npm run dev 命令编译源码，然后以调试的方式运行函数：

```bash
fun local invoke -d 3000 demo
```

程序会阻塞在这里，并不会继续往下执行。只有 vs code 的连接上来后，程序才会继续执行。接下通过 vs code 连上来，并开始调试，如下图所示：
![debug-fc.gif](https://i.loli.net/2019/05/08/5cd29906b8bec.gif)

## 部署函数到云端

```bash
fun deploy
```

## 开发与贡献

欢迎提 PR 和 Issue。

注意，本项目将 github 上的主分支设置成了 `gh-pages`，以方便使用 `fun init -n` 来创建脚手架。要开发和修改本项目，一定注意要切换到 `master` 分支（或者基于 `master` 分支打新的分支）做修改。

PR 也是往 `master` 分支合并，合并后会自动更新 `gh-pages` 分支。

```bash
git clone https://github.com/Jeff-Tian/ali-fc-typescript-skeleton.git#master
git checkout master
```
