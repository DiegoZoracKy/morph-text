# morphText

Recursively runs multiple replaces on String (text) based on a predefined rules defined as a parameter.
Useful in cases where a String template is being used. Also it can be a lightweight solution for HTML templates.

## Usage / Examples

```javascript
var strMessageTemplate = 'Dear {{name}}, could you {{something}} {{date}}';

morphText(strMessageTemplate,{
	'{{name}}': 'Function',
	'{{something}}': 'replace these texts for me?',
	'{{date}}': new Date()
});

// Returns: "Dear Function, could you replace these texts for me? Sun May 10 2015 01:04:20 GMT-0300 (BRT)""

```

## Installation
For web, just include the main file found under /lib.
To be used on Node:
```javascript
npm install morph-text
```