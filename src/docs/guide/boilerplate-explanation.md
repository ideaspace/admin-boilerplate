### 说明

企业级应用(诸如 DevOps)，特点是流程多，交互复杂。从前端的角度看，界面展示注重一个工作流程从创建到结束的完整性，而数据的连贯流动是核心。正因为如此，我们是从数据的角度切入开发的。

### 目标

本样板工程旨在提供统一的前端开发模式和编码规范来编写 Vue.js 代码。这使得样板工程具有如下的特性：

- 提供现成的中后台管理系统界面骨架
- 后端开发人员能够快速的开发中后台管理系统界面
- 团队成员更容易阅读和理解。
- IDEs 更容易理解代码，从而提供高亮、格式化等辅助功能 

### 基于模块开发

- 始终基于模块的方式来构建你的应用，每一个子模块只做一件事情。
- 如果你的组件做了太多的事或是变得臃肿，请将其拆分成更小的组件并保持单一的原则。
- 一个模块是应用程序中独立的一个部分，每一个 `*.vue` 专注于解决一个单一的问题，它是**独立的**、**可复用的**、**微小的**和**可测试的**。

### 模拟数据

为了更贴近实际交互效果，本工程使用了 `setTimeout` 函数模拟数据加载效果，真正的开发中请给予删除。

数据文件位于 `src/mocks` 目录

### 浏览器兼容

Edge, Chrome, Firefox, Safari

### 其他 

为了更好的描述本工程，引入了 `markdown` 的文档模式。这些功能在业务开发中不是必须的，您可以根据实际需求进行删除，以减少工程构建后的代码体积。

工程使用了 Element-Ui 组件库，并对部分样式进行修改。

工程使用了 `ES6` 语法，您需要对 `ES6` 有所了解。同时提供代码复制功能，拿来即用。

除了必要的项目组织结构，没有其他的强制要求，您完全能够利用 NPM 生态来扩展项目的功能。
