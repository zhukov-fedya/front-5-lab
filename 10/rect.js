import * as PIXI from './node_modules/pixi.js/dist/pixi.mjs';

const app = new PIXI.Application({
  backgroundColor: 0xFFFFFF,        // ширина и высота задаются автоматически
});

document.body.appendChild(app.view);

const rect = new PIXI.Graphics();
rect.beginFill(0x000000);           // создание фигуры прямоугольника
rect.drawRect(-50, -25, 100, 50);   // Рисуем от (-50, -25), чтобы (0, 0) был в центре
rect.endFill();

rect.x = app.screen.width / 2;
rect.y = app.screen.height / 2;

app.stage.addChild(rect);

app.ticker.add(() => {    // встроенный цикл
  rect.rotation += 0.1; // поворачиваем на 0.05 радиан каждый кадр
});