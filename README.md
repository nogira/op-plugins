<!-- <h1 align="center"> -->
# op-plugins
<!-- </h1> -->

<br>

<!-- <p align="center"> -->
plugins for my app [op](https://github.com/nogira/op).
<!-- </p> -->

<br>

## plugin structure
```md
📁 plugin name
 ├─📄config.json
 ├─📄my-code-file.js  (OPTIONAL)
 └─📄my-icon-file.png (OPTIONAL)
 (above two files are example of additional files you could have. there is no
  maximum number, nor do they have to be `.js` or `.png` files)
```

### `config.json`

- properties:
  - `actionName`: name of the action (PLUGIN FOLDER NAME MUST BE THE SAME)
  - `inputType`: where to get input text from. options: selection (i.e. the selected text), clipboard (i.e. the text you last copied)
  - `iconFile`: file name of image icon to display in the popup
  - `regexMatch`: button is displayed when the input text has a match to the pattern. also, the match is used as the input text
  - `regexMatchFlags`: flags to apply to the regex pattern
  - `regexReplace`: the part of the input string to replace
  - `regexReplaceFlags`: flags to apply to the regex pattern
  - `env`: the filepath to the executable environment your script runs in
  - `scriptFile`: your script file containing the code to modify the input text

- example:
```json
{
    "actionName": "plugin name",
    "inputType": "selection",
    "iconFile": "icon.png",
    "regexMatch": "https:\/\/google\\.com",
    "regexMatchFlags": "gi",
    "regexReplace": "https:\/\/google\\.com",
    "regexReplaceFlags": "gi",
    "env": "~/.nvm/versions/node/v18.2.0/bin/node",
    "scriptFile": "main.js"
}
```
