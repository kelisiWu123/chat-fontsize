const vscode = require('vscode')

// CSS样式模板
const getCssTemplate = (fontSize) => `
.rendered-markdown {
  font-size: ${fontSize}px !important;
}
`

/**
 * 应用字体大小设置
 * @param {number} fontSize 字体大小(px)
 */
function applyFontSize(fontSize) {
  const config = vscode.workspace.getConfiguration()

  // 更新我们的插件配置
  config.update('copilotChatFontSize.fontSize', fontSize, vscode.ConfigurationTarget.Global)

  // 更新custom-ui-style配置
  let customStyles = config.get('custom-ui-style.stylesheet') || {}
  customStyles['.rendered-markdown'] = `font-size:${fontSize}px;`

  config.update('custom-ui-style.stylesheet', customStyles, vscode.ConfigurationTarget.Global)

  // 更新VSCode内置的聊天字体大小
  config.update('chat.editor.fontSize', fontSize, vscode.ConfigurationTarget.Global)

  vscode.window.showInformationMessage(`Copilot Chat字体大小已设置为 ${fontSize}px`)
}

/**
 * 激活插件
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('插件 "chat-fontsize" 已激活')

  // 获取当前配置的字体大小
  let fontSize = vscode.workspace.getConfiguration().get('copilotChatFontSize.fontSize')

  // 注册增加字体大小命令
  let increaseDisposable = vscode.commands.registerCommand('copilot-chat-fontsize.increase', function () {
    fontSize = Math.min(fontSize + 1, 30)
    applyFontSize(fontSize)
  })

  // 注册减小字体大小命令
  let decreaseDisposable = vscode.commands.registerCommand('copilot-chat-fontsize.decrease', function () {
    fontSize = Math.max(fontSize - 1, 8)
    applyFontSize(fontSize)
  })

  // 注册重置字体大小命令
  let resetDisposable = vscode.commands.registerCommand('copilot-chat-fontsize.reset', function () {
    fontSize = 14 // 默认大小
    applyFontSize(fontSize)
  })

  // 配置变更监听器
  let configurationChangeDisposable = vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('copilotChatFontSize.fontSize')) {
      fontSize = vscode.workspace.getConfiguration().get('copilotChatFontSize.fontSize')
      applyFontSize(fontSize)
    }
  })

  // 初始化字体大小
  applyFontSize(fontSize)

  // 添加到上下文中管理生命周期
  context.subscriptions.push(increaseDisposable, decreaseDisposable, resetDisposable, configurationChangeDisposable)
}

/**
 * 停用插件
 */
function deactivate() {
  console.log('插件 "chat-fontsize" 已停用')
}

module.exports = {
  activate,
  deactivate,
}
