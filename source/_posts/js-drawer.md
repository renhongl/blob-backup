---
title: JS-Drawer
date: 2020-02-27 13:54:06
tags:
    - Javascript
    - 作品
---

Javascript drawer tool, use to draw something and animate it.

Online demo: [Demo](https://renhongl.github.io/source/drawer/)

<!--more-->

## Example Code

```js
import Drawer from 'js-drawer';

const drawer = new Drawer({
    container: document.body,
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    loop: 3000,
    size: 1,
    speed: 20,
    color: '#000000',
    toolBar: true,
});

drawer.setColor('red');
drawer.setSize('20');
drawer.setState('pencil');
setTimeout(() => {
    drawer.animate();
}, 5000);

```






## Drawer configuration

Name|Type|Desc|Default|Required
---|---|---|---|---
container|DOM Object|DOM element|body|false
width|Number|Canvas width|400|false
height|Number|Canvas height|400|false
size|Number|Stroke size|1|false
color|String|Stroke color|#000000|false
speed|Number|Animation speed|20|false
loop|Number|Animation next loop waiting time|3000|false


## Drawer API

Name|Type|Desc|Parameter|Param Example
---|---|---|---|---|---|
setColor|Function|Set stroke color before draw next line|color&lt;String&gt;|#fff
setSize|Function|Set stroke size before draw next line|size&lt;Number&gt;|20
setState|Function|Set stroke state before draw next line|state&lt;String&gt;|pen / pencil / rect
animate|Function|Make animation use exsiting graph||



## License

MIT