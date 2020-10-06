# eslint-plugin-bes

The set contained some custom rules for BES

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-bes`:

```
$ npm install eslint-plugin-bes --save-dev
```


## Usage

Add `bes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "bes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bes/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





