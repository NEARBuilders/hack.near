# hack.near

## Current

1. Install [bos-workspace](https://github.com/NEARBuilders/bos-workspace)
2. Install [bos-cli-rs](https://github.com/bos-cli-rs/bos-cli-rs)
3. ```mkdir hack.near```
4. ```cd hack.near && bos components download hack.near```
5. Components are in /src, nested by . dotation
6. bos.config.json, gitignore...

I would like to be able to easily download my widgets and immediately start building with them in my workspace

Devhub and near-discovery-components also hold all their widgets in a src directory. Existing bos-workspace's hold all their widgets in apps/{{appName}}
