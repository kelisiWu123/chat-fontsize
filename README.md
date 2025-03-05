# Copilot Chat Font Size

还在为 AI Editor 的字体大小而烦恼吗？试试这个扩展吧！
一个允许调整 GitHub Copilot Chat 和 Cursor Chat 面板字体大小的 VSCode 扩展。

## 功能

- 通过状态栏图标快速调整 AI 助手聊天面板字体大小
- 提供图形界面进行直观的字体大小调整
- 支持同时调整多个区域的字体大小
- 支持 GitHub Copilot Chat 和 Cursor Chat 聊天界面
- 字体大小重启后生效
- 版本 1.0.0 正式发布

## 依赖

此扩展必须搭配 [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) 扩展。

## 使用方法

安装扩展后，有三种方式调整字体大小：

1. 通过状态栏图标：

   - 在 VSCode 窗口右下角找到 `Aa` 图标
   - 点击打开字体大小调整菜单
   - 选择"增加"、"减小"、"重置"或"使用滑块调整"
   - 选择"高级设置"可以分别配置不同区域的字体大小

2. 通过设置：

   - 打开 VSCode 设置
   - 搜索 "Copilot Chat Font Size" 调整主要聊天区域
   - 或搜索 "chat.editor.fontSize" 调整编辑器区域

3. 通过命令：
   - 打开命令面板 (Ctrl+Shift+P / Cmd+Shift+P)
   - 输入并选择 `Copilot Chat: 打开字体大小调整菜单`
   - 或者选择 `Copilot Chat: 字体大小高级设置`

## 状态栏指示器

状态栏中的图标会显示当前设置的字体大小，并提供一个点击即可访问的菜单。

## 高级设置

通过高级设置菜单，您可以：

- 同步所有区域的字体大小
- 单独调整主要聊天内容区域的字体大小
- 单独调整编辑器区域的字体大小

## 要求

- Visual Studio Code 1.70.0 或更高版本
- GitHub Copilot Chat 扩展
- 推荐安装：Custom UI Style 扩展 (subframe7536.custom-ui-style)

## 设置

此扩展提供以下设置：

- `copilotChatFontSize.fontSize`: 设置 Copilot 聊天面板主要内容区域的字体大小 (默认: 14px)
- `chat.editor.fontSize`: [VS Code 内置设置] 控制聊天输入编辑器的字体大小

## 工作原理

本扩展通过以下方式调整字体大小：

1. 通过修改 Custom UI Style 扩展的设置，为 Copilot Chat 面板注入自定义字体大小样式
2. 直接修改 VS Code 的原生设置 `chat.editor.fontSize` 来调整编辑器区域

## 反馈和贡献

如发现问题或有功能建议，请在 GitHub 存储库中提出 issue。

## 许可证

[MIT](LICENSE)
