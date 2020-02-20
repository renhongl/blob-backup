



; (function (window, undefined) {

    Drawer.prototype.setStyles = function (target, styles) {
        for (let key in styles) {
            if (styles.hasOwnProperty(key)) {
                target.style[key] = styles[key];
            }
        }
    }

    Drawer.prototype.createToolBar = function () {
        let self = this;
        let con = this.container;
        let btnStyles = {
            border: 'none',
            height: '30px',
            padding: '0 5px',
            margin: '5px',
            borderRadius: '5px',
            boxShadow: '0 0 4px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            outline: 'none',
        };

        let inputStyles = {
            height: '30px',
            borderRadius: '5px',
            margin: '5px',
            border: 'none',
            boxShadow: 'inset 0 0 4px rgba(0,0,0,0.5)',
            paddingLeft: '5px',
            width: '50px',
            outline: 'none',
        };

        let btnHoverStyles = `
            #tools button:hover{
                background: #c7c1c1;
            }
            #tools .active{
                background: #c7c1c1;
            }
        `;

        let style = document.createElement('style');
        style.appendChild(document.createTextNode(btnHoverStyles));
        document.getElementsByTagName('head')[0].appendChild(style);

        // tools
        let tools = document.createElement('div');
        tools.setAttribute('id', 'tools');
        con.appendChild(tools);
        this.setStyles(tools, {
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        });

        // pencil
        let pencil = document.createElement('button');
        pencil.setAttribute('id', 'pencil');
        pencil.setAttribute('class', 'active');
        tools.appendChild(pencil);
        pencil.innerText = 'Pencil';
        this.setStyles(pencil, btnStyles);

        // pen
        let pen = document.createElement('button');
        pen.setAttribute('id', 'pen');
        tools.appendChild(pen);
        pen.innerText = 'Pen';
        this.setStyles(pen, btnStyles);

        // rect
        let rect = document.createElement('button');
        rect.setAttribute('id', 'rect');
        tools.appendChild(rect);
        rect.innerText = 'Rect';
        this.setStyles(rect, btnStyles);

        // clear
        let clear = document.createElement('button');
        clear.setAttribute('id', 'clear');
        tools.appendChild(clear);
        clear.innerText = 'Clear';
        this.setStyles(clear, btnStyles);

        // clear
        let preview = document.createElement('button');
        preview.setAttribute('id', 'preview');
        tools.appendChild(preview);
        preview.innerText = 'Run';
        this.setStyles(preview, btnStyles);

        // color
        let color = document.createElement('input');
        color.setAttribute('id', 'color');
        color.setAttribute('type', 'color');
        tools.appendChild(color);
        color.innerText = 'Color';
        this.setStyles(color, btnStyles);

        // size
        let sizeText = document.createTextNode('Size ');
        tools.appendChild(sizeText);
        let size = document.createElement('input');
        size.setAttribute('id', 'size');
        size.setAttribute('placeholder', 'Size');
        size.setAttribute('value', this.size);
        tools.appendChild(size);
        size.innerText = 'Size';
        this.setStyles(size, inputStyles);

        // speed
        let speedText = document.createTextNode('Speed ');
        tools.appendChild(speedText);
        let speed = document.createElement('input');
        speed.setAttribute('id', 'speed');
        speed.setAttribute('placeholder', 'Speed');
        speed.setAttribute('value', this.speed);
        tools.appendChild(speed);
        speed.innerText = 'Speed';
        this.setStyles(speed, inputStyles);

        // loop
        let loopText = document.createTextNode('Loop ');
        tools.appendChild(loopText);
        let loop = document.createElement('input');
        loop.setAttribute('id', 'loop');
        loop.setAttribute('placeholder', 'loop');
        loop.setAttribute('value', this.loop);
        tools.appendChild(loop);
        loop.innerText = 'Loop';
        this.setStyles(loop, inputStyles);

        size.addEventListener('change', function (e) {
            self.sizeHandler.call(self, e);
        });
        speed.addEventListener('change', function (e) {
            self.speedHandler.call(self, e);
        });
        loop.addEventListener('change', function (e) {
            self.loopHandler.call(self, e);
        });
        color.addEventListener('change', function (e) {
            self.colorHandler.call(self, e);
        });
        clear.addEventListener('click', function (e) {
            self.clearAllHandler.call(self, e);
        });
        pen.addEventListener('click', function (e) {
            self.penClickHandler.call(self, e);
            pencil.classList.remove('active');
            rect.classList.remove('active');
            pen.classList.add('active');
        });
        pencil.addEventListener('click', function (e) {
            self.pencilClickHandler.call(self, e);
            pen.classList.remove('active');
            rect.classList.remove('active');
            pencil.classList.add('active');
        });
        rect.addEventListener('click', function (e) {
            self.rectClickHandler.call(self, e);
            pen.classList.remove('active');
            pencil.classList.remove('active');
            rect.classList.add('active');
        });
        preview.addEventListener('click', function (e) {
            self.previewHandler.call(self, e);
        });
        
    }

    Drawer.prototype.rectClickHandler = function (e) {
        this.state = 'rect';
        console.log(this.state);
    }

    Drawer.prototype.typeHandler = function (e) {
        this.type = e.target.value;
    }

    Drawer.prototype.previewHandler = function () {
        this.drawRun(this.preCtx);
    }
    Drawer.prototype.colorHandler = function (e) {
        this.color = e.target.value;
    }
    Drawer.prototype.sizeHandler = function (e) {
        this.size = e.target.value;
    }
    Drawer.prototype.speedHandler = function (e) {
        this.speed = e.target.value;
    }

    Drawer.prototype.loopHandler = function (e) {
        this.loop = e.target.value;
    }

    Drawer.prototype.clearAllHandler = function () {
        this.stop = true;
        this.clearTimer();
        this.dataStore = [];
        this.fontStore = [];
        this.colorStore = [];
        this.drawing = false;
        this.lastPoint = true;
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    Drawer.prototype.clearCanvas = function (ctx) {
        ctx.clearRect(0, 0, this.width, this.height);
    }

    Drawer.prototype.setStrokeStyles = function (ctx, i, colorStore, fontStore) {
        ctx.strokeStyle = colorStore[i];
    }

    Drawer.prototype.getNumber = function (str) {
        return Number.parseInt(str);
    }

    Drawer.prototype.clickHandler = function (e) {
        this.stop = true;
        this.clearTimer();
        if (this.state === 'pen') {
            if (this.lastPoint) {
                this.dataStore.push([]);
                this.typeStore.push('line');
                this.lastPoint = false;
                this.colorStore.push(this.color);
                this.fontStore.push(this.size);
            }
            let currentPath = this.dataStore[this.dataStore.length - 1];
            if (currentPath.length > 0) {
                let fromPoint = currentPath[currentPath.length - 1];
                let points = this.createPoints(10, fromPoint, [e.offsetX, e.offsetY]);
                this.dataStore[this.dataStore.length - 1] = currentPath.concat(points);
            }
            currentPath.push([e.offsetX, e.offsetY]);
            this.draw(this.ctx);
        } else if (this.state === 'pencil') {

        }
    }

    Drawer.prototype.createPoints = function (n, from, to) {
        let offX = (to[0] - from[0]) / n;
        let offY = (to[1] - from[1]) / n;
        let points = [];
        for (let i = 1; i < n; i++) {
            points.push([from[0] + (offX * i), from[1] + (offY * i)]);
        }
        return points;
    }

    Drawer.prototype.dblClickHandler = function (e) {
        if (this.state === 'pen') {
            if (this.lastPoint) {
                this.dataStore.push([]);
            }
            this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
            this.lastPoint = true;
            this.tempPoint = [];
            this.draw(this.ctx);
        } else if (this.state === 'pencil') {

        }
    }

    Drawer.prototype.draw = function (ctx) {
        let self = this;
        this.clearCanvas(ctx);
        let lastDrawPoint = [];
        let lastIndex = 0;
        this.dataStore.forEach((path, i) => {
            lastIndex = i;
            self.setStrokeStyles(ctx, i, self.colorStore, self.fontStore);
            path.forEach((point, index) => {
                ctx.beginPath();
                if (path.length - 1 === index) {
                    lastDrawPoint = point;
                }
                if (0 === index) {
                    if (self.state === 'rect') {
                        self.drawByType(point, ctx, i);
                        ctx.stroke();
                    } else {
                        ctx.moveTo(point[0], point[1]);
                    }
                } else {
                    let beforePoint = path[index - 1];
                    self.drawByType(point, ctx, i, beforePoint);
                    ctx.stroke();
                }
            });
            ctx.stroke();
            ctx.closePath();
        });
        ctx.beginPath();
        self.drawByType(this.tempPoint, ctx, lastIndex, lastDrawPoint);
        ctx.stroke();
    }

    Drawer.prototype.mouseDownHandler = function (e) {
        this.stop = true;
        this.clearTimer();
        if (this.state === 'pen') {

        } else if (this.state === 'pencil') {
            this.dataStore.push([]);
            this.colorStore.push(this.color);
            this.fontStore.push(this.size);
            this.typeStore.push('line');
            this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
            this.drawing = true;
        } else if (this.state === 'rect') {
            this.dataStore.push([]);
            this.colorStore.push(this.color);
            this.fontStore.push(0);
            this.typeStore.push('rect');
            this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
            this.drawing = true;
        }
    }

    Drawer.prototype.mouseUpHandler = function (e) {
        this.drawing = false;
    }

    Drawer.prototype.throttling = function (func, delay) {
        let timer;
        return function (...args) {
            if (timer) {
                return;
            }
            timer = setTimeout(function () {
                func.apply(this, args);
                timer = null;
            }, delay);
        }
    }

    Drawer.prototype.mouseMoveHandler = function (e) {
        if (this.state === 'pen') {
            if (!this.lastPoint) {
                this.tempPoint = [e.offsetX, e.offsetY];
                this.draw(this.ctx);
            }
        } else if (this.state === 'pencil') {
            if (this.drawing) {
                this.dataStore[this.dataStore.length - 1].push([e.offsetX, e.offsetY]);
                this.draw(this.ctx);
            }
        } else if (this.state === 'rect') {
            if (this.drawing) {
                this.fontStore[this.fontStore.length - 1] = [e.offsetX - this.dataStore[this.dataStore.length - 1][0][0], e.offsetY - this.dataStore[this.dataStore.length - 1][0][1]];
                this.draw(this.ctx);
            }
        }
    }

    Drawer.prototype.run = function (i, ctx) {
        let self = this;
        if (i >= this.dataStore.length) {
            if (this.loop && !this.stop) {
                setTimeout(() => {
                    this.previewHandler();
                }, this.loop);
            }
            return;
        }
        for (let j = 1; j < this.dataStore[i].length; j++) {
            let point = this.dataStore[i][j];
            let lineDelay = j * this.speed;
            let timer = setTimeout(function () {
                let beforePoint = self.dataStore[i][j - 1];
                ctx.beginPath();
                self.setStrokeStyles(ctx, i, self.colorStore, self.fontStore);
                self.drawByType(point, ctx, i, beforePoint);
                ctx.stroke();
                if (j === self.dataStore[i].length - 1) {
                    self.run(i + 1, ctx);
                }
            }, lineDelay);
            this.timerStore.push(timer);
        }
    }

    Drawer.prototype.drawByType = function (point, ctx, i, beforePoint) {
        let type = this.typeStore[i];
        if (type === 'rect') {
            ctx.rect(point[0], point[1], this.fontStore[i][0], this.fontStore[i][1]);
        } else if (type === 'line') {
            ctx.lineWidth = this.fontStore[i];
            if (beforePoint) {
                ctx.moveTo(beforePoint[0], beforePoint[1]);
            }
            ctx.lineTo(point[0], point[1]);
        } else if (type === 'circle') {
            ctx.arc(point[0], point[1], this.fontStore[i], 0, 2 * Math.PI);
        }
    }

    Drawer.prototype.clearTimer = function () {
        this.timerStore.forEach(function (timer) {
            clearTimeout(timer);
        });
    }

    Drawer.prototype.drawRun = function (ctx) {
        this.clearCanvas(ctx);
        if (this.dataStore.length === 0) {
            return;
        }
        this.stop = false;
        this.run(0, ctx);
    }

    Drawer.prototype.penClickHandler = function () {
        console.log('pen');
        this.state = 'pen';
    }


    Drawer.prototype.pencilClickHandler = function () {
        console.log('pencil');
        this.state = 'pencil';
    }

    function Drawer(options) {
        let self = this;
        this.container = options.container || document.body;

        this.c = document.createElement('canvas');

        this.ctx = this.c.getContext('2d');
        this.preCtx = this.c.getContext('2d');

        this.width = options.width || 400;
        this.height = options.height || 400;
        this.drawing = false;
        this.lastPoint = true;
        this.dataStore = [];
        this.colorStore = [];
        this.fontStore = [];
        this.timerStore = [];
        this.typeStore = [];
        this.stop = true;
        this.state = 'pencil';
        this.tempPoint = [];
        this.reverse = false;
        this.size = options.size || 1;
        this.speed = options.speed || 20;
        this.loop = options.loop || 3000;
        this.color = options.color || '#000000';

        if (options.toolBar) {
            this.createToolBar();
        }

        this.container.appendChild(this.c);

        this.c.setAttribute('width', this.width);
        this.c.setAttribute('height', this.height);

        this.c.addEventListener('mousedown', function (e) {
            self.mouseDownHandler.call(self, e);
        });
        this.c.addEventListener('mouseup', function (e) {
            self.mouseUpHandler.call(self, e);
        });
        this.c.addEventListener('mousemove', function (e) {
            self.mouseMoveHandler.call(self, e);
        });
        this.c.addEventListener('click', function (e) {
            self.clickHandler.call(self, e);
        });
        this.c.addEventListener('dblclick', function (e) {
            self.dblClickHandler.call(self, e);
        });
    }

    window.Drawer = Drawer;

}(window));