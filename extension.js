const vscode = require('vscode')

// 保存状态栏项目引用
let statusBarItem

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Copilot Chat Font Size 扩展已激活')

  // 检查是否安装了Custom UI Style扩展
  checkDependency()

  // 创建状态栏图标 - 提前创建确保显示
  createStatusBarItem(context)

  // 创建并注册命令
  registerCommands(context)

  // 初始监听配置变化
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('copilotChatFontSize.fontSize')) {
        updateFontSize()
        updateEditorFontSize() // 同时更新editor字体大小
        // 更新状态栏显示
        updateStatusBarItem()
      }
    })
  )

  // 初始设置字体大小
  updateFontSize()
  updateEditorFontSize() // 初始化时设置editor字体大小

  // 确保状态栏图标显示
  setTimeout(() => {
    if (statusBarItem) {
      statusBarItem.show()
      console.log('确保状态栏图标显示')
    }
  }, 1000)

  // 立即确认命令是否正确注册
  setTimeout(() => {
    vscode.commands.getCommands(true).then((commands) => {
      if (commands.includes('copilot-chat-fontsize.increase')) {
        console.log('命令 copilot-chat-fontsize.increase 已成功注册')
      } else {
        console.error('警告：命令 copilot-chat-fontsize.increase 未能成功注册')
      }
    })
  }, 2000)
}

function deactivate() {
  // 清理状态栏项目
  if (statusBarItem) {
    statusBarItem.dispose()
  }
}

function registerCommands(context) {
  // 增加字体大小
  context.subscriptions.push(
    vscode.commands.registerCommand('copilot-chat-fontsize.increase', () => {
      const config = vscode.workspace.getConfiguration('copilotChatFontSize')
      const currentSize = config.get('fontSize')
      const newSize = Math.min(currentSize + 1, 30) // 最大30px
      config.update('fontSize', newSize, true)
    })
  )

  // 减小字体大小
  context.subscriptions.push(
    vscode.commands.registerCommand('copilot-chat-fontsize.decrease', () => {
      const config = vscode.workspace.getConfiguration('copilotChatFontSize')
      const currentSize = config.get('fontSize')
      const newSize = Math.max(currentSize - 1, 8) // 最小8px
      config.update('fontSize', newSize, true)
    })
  )

  // 重置字体大小
  context.subscriptions.push(
    vscode.commands.registerCommand('copilot-chat-fontsize.reset', () => {
      const config = vscode.workspace.getConfiguration('copilotChatFontSize')
      config.update('fontSize', 14, true) // 重置为默认值14px
    })
  )

  // 显示快速调整面板
  context.subscriptions.push(vscode.commands.registerCommand('copilot-chat-fontsize.showQuickPick', showFontSizeQuickPick))

  // 注册范围选择命令
  context.subscriptions.push(vscode.commands.registerCommand('copilot-chat-fontsize.showSlider', showFontSizeSlider))

  // 显示字体设置选项
  context.subscriptions.push(vscode.commands.registerCommand('copilot-chat-fontsize.settings', showFontSettings))
}

function createStatusBarItem(context) {
  try {
    // 创建状态栏按钮
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100)
    statusBarItem.command = 'copilot-chat-fontsize.showQuickPick'
    statusBarItem.tooltip = 'Copilot Chat 字体大小'

    // 使用图标和文本
    const config = vscode.workspace.getConfiguration('copilotChatFontSize')
    const fontSize = config.get('fontSize')
    statusBarItem.text = `$(text-size) ${fontSize}px`

    // 确保显示
    statusBarItem.show()

    // 注册到扩展上下文
    context.subscriptions.push(statusBarItem)

    console.log('状态栏图标已创建')
  } catch (error) {
    console.error('创建状态栏图标时出错:', error)
  }
}

function updateStatusBarItem() {
  try {
    // 确保状态栏项目存在
    if (!statusBarItem) {
      console.log('状态栏项目不存在，重新创建')
      createStatusBarItem(vscode.extensions.getExtension('yourpublishername.chat-fontsize').exports.context)
      return
    }

    // 获取当前字体大小
    const config = vscode.workspace.getConfiguration('copilotChatFontSize')
    const fontSize = config.get('fontSize')

    // 使用Unicode图标表示字体大小
    statusBarItem.text = `$(text-size) ${fontSize}px`

    // 确保显示
    statusBarItem.show()
  } catch (error) {
    console.error('更新状态栏图标时出错:', error)
  }
}

async function showFontSizeQuickPick() {
  // 获取当前字体大小
  const config = vscode.workspace.getConfiguration('copilotChatFontSize')
  const currentSize = config.get('fontSize')

  // 定义选项
  const items = [
    {
      label: '$(zoom-in) 增加字体大小',
      description: `当前: ${currentSize}px`,
      action: 'increase',
    },
    {
      label: '$(zoom-out) 减小字体大小',
      description: `当前: ${currentSize}px`,
      action: 'decrease',
    },
    {
      label: '$(debug-restart) 重置字体大小',
      description: '默认: 14px',
      action: 'reset',
    },
    {
      label: '$(sliders) 精确调整',
      description: '精确设置字体大小',
      action: 'slider',
    },
    {
      label: '$(sync) 同步所有字体大小',
      description: '使用单一字体大小设置',
      action: 'sync',
    },
  ]

  // 显示快速选择菜单
  const selection = await vscode.window.showQuickPick(items, {
    placeHolder: '调整 Copilot Chat 字体大小',
  })

  if (selection) {
    switch (selection.action) {
      case 'increase':
        vscode.commands.executeCommand('copilot-chat-fontsize.increase')
        break
      case 'decrease':
        vscode.commands.executeCommand('copilot-chat-fontsize.decrease')
        break
      case 'reset':
        vscode.commands.executeCommand('copilot-chat-fontsize.reset')
        break
      case 'slider':
        vscode.commands.executeCommand('copilot-chat-fontsize.showSlider')
        break
      case 'sync':
        // 同步两个设置的字体大小
        await chatEditorConfig.update('fontSize', currentCustomSize, true)
        vscode.window.showInformationMessage(`已同步所有字体大小为 ${currentCustomSize}px`)
        break
    }
  }
}

async function showFontSizeSlider() {
  // 获取当前字体大小
  const config = vscode.workspace.getConfiguration('copilotChatFontSize')
  const currentSize = config.get('fontSize')

  // 显示输入框，带有数字验证
  const input = await vscode.window.showInputBox({
    value: currentSize.toString(),
    prompt: '设置 Copilot Chat 字体大小 (8-30px)',
    validateInput: (value) => {
      // 验证输入为有效数字
      const size = parseInt(value)
      if (isNaN(size) || size < 8 || size > 30) {
        return '请输入8到30之间的数字'
      }
      return null
    },
  })

  // 更新字体大小
  if (input !== undefined) {
    const newSize = parseInt(input)
    config.update('fontSize', newSize, true)
  }
}

async function checkDependency() {
  // 检查是否安装了Custom UI Style扩展
  const extension = vscode.extensions.getExtension('subframe7536.custom-ui-style')

  if (!extension) {
    const action = await vscode.window.showWarningMessage('此扩展需要依赖 Custom UI Style 扩展。是否安装？', '安装', '取消')

    if (action === '安装') {
      // 打开VS Code扩展市场安装页面
      vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('vscode:extension/subframe7536.custom-ui-style'))
    }
  }
}

async function updateFontSize() {
  const config = vscode.workspace.getConfiguration('copilotChatFontSize')
  const fontSize = config.get('fontSize')

  // 获取当前的custom-ui-style设置
  const customUIConfig = vscode.workspace.getConfiguration('custom-ui-style')
  const stylesheet = customUIConfig.get('stylesheet') || {}

  // 更新相关类的样式
  const updatedStylesheet = {
    ...stylesheet,
    '.rendered-markdown': `font-size: ${fontSize}px !important;`,
    '.interactive-session-item': `font-size: ${fontSize}px !important;`, // 添加更多选择器以增加覆盖范围
    '.interactive-response': `font-size: ${fontSize}px !important;`,
    '.anysphere-markdown-container-root': `font-size: ${fontSize}px !important; line-height: 1.4;`, // 添加新选择器
    // 新增：支持更多编辑器
    '.monaco-editor.no-user-select .view-lines': 'font-size: 16px !important; line-height: 1.4;', // 新增样式规则
  }

  // 更新设置
  await customUIConfig.update('stylesheet', updatedStylesheet, true)

  console.log(`Copilot Chat字体大小已更新为${fontSize}px`)
}

// 新增：显示字体设置选项界面
async function showFontSettings() {
  const chatEditorConfig = vscode.workspace.getConfiguration('chat.editor')
  const customConfig = vscode.workspace.getConfiguration('copilotChatFontSize')
  const currentCustomSize = customConfig.get('fontSize')

  const items = [
    {
      label: '同步所有字体大小',
      description: '使用单一字体大小设置',
      picked: true, // 默认选中
      action: 'sync',
    },
    {
      label: '$(gear) 高级设置',
      description: '配置不同区域的字体大小',
      action: 'settings',
    },
  ]

  const selection = await vscode.window.showQuickPick(items, {
    placeHolder: '选择要配置的字体大小设置',
    canPickMany: false,
  })

  if (selection) {
    switch (selection.action) {
      case 'sync':
        // 同步两个设置的字体大小
        await chatEditorConfig.update('fontSize', currentCustomSize, true)
        vscode.window.showInformationMessage(`已同步所有字体大小为 ${currentCustomSize}px`)
        break
      case 'settings':
        // 处理高级设置
        showFontSizeSlider() // 调整主区域字体大小
        break
    }
  }
}

// 新增：更新chat.editor.fontSize设置
async function updateEditorFontSize() {
  try {
    // 获取当前扩展的字体大小
    const config = vscode.workspace.getConfiguration('copilotChatFontSize')
    const fontSize = config.get('fontSize')

    // 获取用户设置
    const chatEditorConfig = vscode.workspace.getConfiguration('chat.editor')

    // 默认不自动同步，让用户可以分别控制两种字体大小
    console.log(`Chat编辑区域当前字体大小: ${chatEditorConfig.get('fontSize')}px`)
  } catch (error) {
    console.error('更新编辑器字体大小时出错:', error)
  }
}

module.exports = {
  activate,
  deactivate,
}
