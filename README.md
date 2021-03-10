
# Convert CSS units into javascript `Number` values

## Usage examples
```javascript  
// Convert rem value to pixels  
const remExample = convertCssUnit( '2.5rem' );  
  
// Convert time unit (seconds) to milliseconds  
const speedExample = convertCssUnit( '2s' );  
  
// Convert angle unit (grad) to degrees  
const emExample = convertCssUnit( '200grad' );  
  
// Convert vw value to pixels  
const vwExample = convertCssUnit( '80vw' );  
  
// Convert the css variable to pixels  
const varExample = convertCssUnit( getComputedStyle( document.body ).getPropertyValue( '--container-width' ) );  
  
// Convert `em` value relative to page element  
const emExample = convertCssUnit( '2em', document.getElementById( '#my-element' ) );  
```  
## Supported units

Any format with preceding plus (`+`) or minus (`-`) symbol is valid, along with any of the following units: `px`, `cm`, `mm`, `q`, `in`, `pc`, `pt`, `rem`, `em`, `vw`, `vh`, `s`, `ms`, `deg`, `rad`, `grad`, `turn`

For example:

```
10rem
10.2em
-0.34cm
+10.567s
```

## Unit conversions

### Absolute lengths
| Unit input | Conversion output |  
|------|------------|  
| `px`   | `px`        |  
| `cm`   | `px`         |  
| `mm`   | `px`         |  
| `q`   | `px`         |  
| `in`   | `px`         |  
| `pc`   | `px`         |  
| `pt`   | `px`         |  

### Relative lengths
| Unit input | Conversion output |  
|------|------------|  
| `rem`   | `px`        |  
| `em`   | `px`         |  
| `vw`   | `px`         |  
| `vh`   | `px`         |  

### Timings
| Unit input | Conversion output |  
|------|------------|  
| `ms`   | `ms`        |  
| `s`   | `ms`         |  

### Angles
| Unit input | Conversion output |  
|------|------------|  
| `deg`   | `px`        |  
| `rad`   | `deg`         |  
| `grad`   | `deg`         |  
| `turn`   | `deg`         |  

You can see a full combination of formats here: [https://jsfiddle.net/thelevicole/k7yt4naw/1/](https://jsfiddle.net/thelevicole/k7yt4naw/1/)
