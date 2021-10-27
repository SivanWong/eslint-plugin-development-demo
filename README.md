# eslint-plugin-development-demo

eslint plugin development demo

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-development-demo`:

```
$ npm install eslint-plugin-development-demo --save-dev
```


## Usage

Add `development-demo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "development-demo"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "development-demo/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





