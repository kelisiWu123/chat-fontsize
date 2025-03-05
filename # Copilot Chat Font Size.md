# Copilot Chat Font Size

一个用于调整 GitHub Copilot Chat 面板字体大小的 Visual Studio Code 扩展。

## 功能

这个扩展允许你通过以下方式调整 GitHub Copilot Chat 的字体大小：

- 命令面板中的命令
- 设置界面调整数值

## 命令

此扩展提供以下命令，你可以通过命令面板 (<kbd>Ctrl+Shift+P</kbd> 或 <kbd>Cmd+Shift+P</kbd>) 访问这些命令：

- **Copilot Chat: 增加字体大小**: 将字体大小增加 1px
- **Copilot Chat: 减小字体大小**: 将字体大小减小 1px
- **Copilot Chat: 重置字体大小**: 将字体大小重置为默认值(14px)

## 设置

此扩展提供以下设置：

- `copilotChatFontSize.fontSize`: 设置 Copilot Chat 面板的字体大小 (默认: 14px)

你可以通过 VSCode 设置界面更改这些设置。

## 原理

此插件通过修改以下配置项来调整 Copilot Chat 的字体大小：

```json
"custom-ui-style.stylesheet": {
  ".rendered-markdown": "font-size:15px;",
},
"chat.editor.fontSize": 14
```

## 要求

- 需要安装 GitHub Copilot 和 GitHub Copilot Chat 扩展
- 需要安装[Custom UI CSS](https://marketplace.visualstudio.com/items?itemName=bernardodsanderson.theme-material-neutral)扩展

## 安装

1. 在 VSCode 中按下 <kbd>Ctrl+P</kbd> (或 <kbd>Cmd+P</kbd> on macOS)
2. 输入 `ext install yourpublishername.chat-fontsize`

## 许可证

本扩展使用 [MIT License](LICENSE) 许可。
