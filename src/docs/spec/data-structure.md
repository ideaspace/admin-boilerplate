在本工程中，菜单数据与模板渲染逻辑，乃至于面包屑导航是一种强耦合的关系。

如果要达到本工程展现的交互效果，就必须遵守一致的数据结构。当然，如果您是一名资深的开发人员，也可以通过修改数据结构和模板渲染逻辑，达到相同的效果，但通常不建议这么做。

本工程的菜单数据结构，请查看 `src/mock/menu.json` 文件，有以下两点说明

- 提供一个树状的菜单结构，用于菜单渲染
- 提供一个所有菜单节点的扁平数组，用于面包屑导航配对
