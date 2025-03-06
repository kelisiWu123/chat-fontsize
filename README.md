# Copilot Chat Font Size

Are you still struggling with the font size in the AI Editor? Try this extension! It allows you to adjust the font size of the GitHub Copilot Chat and Cursor Chat panels in VSCode.

## Features

- Quickly adjust the AI assistant chat panel font size via the status bar icon
- Provides a graphical interface for intuitive font size adjustments
- Supports simultaneous adjustment of multiple areas' font sizes
- Compatible with GitHub Copilot Chat and Cursor Chat interfaces
- Font size changes take effect after a restart
- Version 1.0.0 officially released

## Dependencies

This extension must be used in conjunction with the [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) extension.

## Usage

After installing the extension, there are three ways to adjust the font size:

1. **Via the Status Bar Icon**:

   - Find the `Aa` icon in the bottom right corner of the VSCode window
   - Click to open the font size adjustment menu
   - Choose "Increase", "Decrease", "Reset", or "Adjust with Slider"
   - Select "Advanced Settings" to configure different areas' font sizes separately

2. **Via Settings**:

   - Open VSCode settings
   - Search for "Copilot Chat Font Size" to adjust the main chat area
   - Or search for "chat.editor.fontSize" to adjust the editor area

3. **Via Command**:
   - Open the command palette (Ctrl+Shift+P / Cmd+Shift+P)
   - Type and select `Copilot Chat: Open Font Size Adjustment Menu`
   - Or select `Copilot Chat: Advanced Font Size Settings`

## Status Bar Indicator

The icon in the status bar displays the currently set font size and provides a menu for quick access.

## Advanced Settings

Through the advanced settings menu, you can:

- Synchronize font sizes across all areas
- Adjust the font size of the main chat content area individually
- Adjust the font size of the editor area individually

## Requirements

- Visual Studio Code version 1.70.0 or higher
- GitHub Copilot Chat extension
- Recommended installation: Custom UI Style extension (subframe7536.custom-ui-style)

## Settings

This extension provides the following settings:

- `copilotChatFontSize.fontSize`: Set the font size of the main content area in the Copilot chat panel (default: 14px)
- `chat.editor.fontSize`: Control the font size of the chat input editor

## How It Works

This extension adjusts the font size in the following ways:

1. By modifying the settings of the Custom UI Style extension to inject custom font size styles into the Copilot Chat panel
2. By directly modifying the native VS Code setting `chat.editor.fontSize` to adjust the editor area

## Screenshots

Larger fonts make it easier to read code.

### Custom UI Style Extension Effect

![Custom UI Style Effect](/img/example/cursor.png)

### Copilot Chat Extension Effect

![Copilot Chat Effect](/img/example/copilot.png)

## Feedback and Contributions

If you encounter any issues or have feature suggestions, please raise an issue in the GitHub repository.

## License

[MIT](LICENSE)
