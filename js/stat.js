'use strict';

var CLOUD_WIDTH = '420';
var CLOUD_HEIGHT = '270';

var INITIAL_HEIGHT = '150';
var COLUMN_WIDTH = '40'
var GAP = 20;

var textColor = '#000000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxTimes = function (times) {
  var maxTimes = times[0];
  for (var i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);
    if (times[i] > maxTimes) {
      maxTimes = times[i];
    }
  }
  return maxTimes;
}

var getColumnsHeights = function (times, maxTimes) {
  var height = 0;
  var columnsHeights = [];
  for (var i = 0; i < times.length; i++) {
    if (times[i] === maxTimes) {
      height = INITIAL_HEIGHT;
    } else {
      height = (INITIAL_HEIGHT * times[i]) / maxTimes;
    }
    columnsHeights[i] = height;
  }
  return columnsHeights;
}

var getColumnsColors = function (names, activeColor) {
  var columnColor = 0;
  var columnsColors = [];
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      columnColor = activeColor;
    } else {
      columnColor = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    columnsColors[i] = columnColor;
  }
  return columnsColors;
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = textColor;
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTimes = getMaxTimes(times);

  var columnsHeights = getColumnsHeights(times, maxTimes);

  var columnsColors = getColumnsColors(names, 'rgba(255, 0, 0, 1)');

  var xOffset = 120;
  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = textColor;
    ctx.fillText(times[i], (xOffset + GAP), 90 + (INITIAL_HEIGHT - columnsHeights[i]));
    ctx.fillStyle = columnsColors[i];
    ctx.fillRect((xOffset + GAP), 95 + (INITIAL_HEIGHT - columnsHeights[i]), COLUMN_WIDTH, columnsHeights[i]);
    ctx.fillStyle = textColor;
    ctx.fillText(names[i], (xOffset + GAP), 265);
    xOffset += 90;
  }
};
