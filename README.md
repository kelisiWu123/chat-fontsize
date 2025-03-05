# Copilot Chat Font Size

还在为 AI Editor 的字体大小而烦恼吗？试试这个扩展吧！
Are you still troubled by the font size of the AI Editor? Try this extension!

一个允许调整 GitHub Copilot Chat 和 Cursor Chat 面板字体大小的 VSCode 扩展。
A VSCode extension that allows you to adjust the font size of the GitHub Copilot Chat and Cursor Chat panels.

## 功能

- 通过状态栏图标快速调整 AI 助手聊天面板字体大小
- Quickly adjust the font size of the AI assistant chat panel via the status bar icon.
- 提供图形界面进行直观的字体大小调整
- Provides a graphical interface for intuitive font size adjustment.
- 支持同时调整多个区域的字体大小
- Supports adjusting the font size of multiple areas simultaneously.
- 支持 GitHub Copilot Chat 和 Cursor Chat 聊天界面
- Supports GitHub Copilot Chat and Cursor Chat interfaces.
- 字体大小重启后生效
- Font size takes effect after a restart.
- 版本 1.0.0 正式发布
- Version 1.0.0 officially released.

## 依赖

此扩展必须搭配 [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) 扩展。
This extension must be used with the [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) extension.

## 使用方法

安装扩展后，有三种方式调整字体大小：

1. 通过状态栏图标：

   - 在 VSCode 窗口右下角找到 `Aa` 图标
   - Find the `Aa` icon in the bottom right corner of the VSCode window.
   - 点击打开字体大小调整菜单
   - Click to open the font size adjustment menu.
   - 选择"增加"、"减小"、"重置"或"使用滑块调整"
   - Choose "Increase", "Decrease", "Reset", or "Adjust with Slider".
   - 选择"高级设置"可以分别配置不同区域的字体大小
   - Select "Advanced Settings" to configure the font size for different areas separately.

2. 通过设置：

   - 打开 VSCode 设置
   - Open VSCode settings.
   - 搜索 "Copilot Chat Font Size" 调整主要聊天区域
   - Search for "Copilot Chat Font Size" to adjust the main chat area.
   - 或搜索 "chat.editor.fontSize" 调整编辑器区域
   - Or search for "chat.editor.fontSize" to adjust the editor area.

3. 通过命令：
   - 打开命令面板 (Ctrl+Shift+P / Cmd+Shift+P)
   - Open the command palette (Ctrl+Shift+P / Cmd+Shift+P).
   - 输入并选择 `Copilot Chat: 打开字体大小调整菜单`
   - Type and select `Copilot Chat: Open Font Size Adjustment Menu`.
   - 或者选择 `Copilot Chat: 字体大小高级设置`
   - Or select `Copilot Chat: Font Size Advanced Settings`.

## 状态栏指示器

状态栏中的图标会显示当前设置的字体大小，并提供一个点击即可访问的菜单。
The icon in the status bar displays the currently set font size and provides a clickable menu for access.

## 高级设置

通过高级设置菜单，您可以：

- 同步所有区域的字体大小
- Sync the font size across all areas.
- 单独调整主要聊天内容区域的字体大小
- Adjust the font size of the main chat content area individually.
- 单独调整编辑器区域的字体大小
- Adjust the font size of the editor area individually.

## 要求

- Visual Studio Code 1.70.0 或更高版本
- Visual Studio Code 1.70.0 or higher.
- GitHub Copilot Chat 扩展
- GitHub Copilot Chat extension.
- 推荐安装：Custom UI Style 扩展 (subframe7536.custom-ui-style)
- Recommended installation: Custom UI Style extension (subframe7536.custom-ui-style).

## 设置

此扩展提供以下设置：

- `copilotChatFontSize.fontSize`: 设置 Copilot 聊天面板主要内容区域的字体大小 (默认: 14px)
- `copilotChatFontSize.fontSize`: Set the font size of the main content area of the Copilot chat panel (default: 14px).
- `chat.editor.fontSize`: [VS Code 内置设置] 控制聊天输入编辑器的字体大小
- `chat.editor.fontSize`: [VS Code built-in setting] Controls the font size of the chat input editor.

## 工作原理

本扩展通过以下方式调整字体大小：

1. 通过修改 Custom UI Style 扩展的设置，为 Copilot Chat 面板注入自定义字体大小样式

- By modifying the settings of the Custom UI Style extension to inject custom font size styles for the Copilot Chat panel.

2. 直接修改 VS Code 的原生设置 `chat.editor.fontSize` 来调整编辑器区域

- Directly modifying VS Code's native setting `chat.editor.fontSize` to adjust the editor area.

## 反馈和贡献

如发现问题或有功能建议，请在 GitHub 存储库中提出 issue。
If you encounter any issues or have feature suggestions, please raise an issue in the GitHub repository.

## 许可证

[MIT](LICENSE)
