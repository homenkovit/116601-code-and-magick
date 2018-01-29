'use strict';

var CLOUD_WIDTH = '420';
var CLOUD_HEIGHT = '270';
var gap = 120;
var INITIAL_HEIGHT = '150';
var COLUMN_WIDTH = '40'

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var maxTimes = times[0];

  for (var i = 0; i < times.length; i++) {
    for (var j = 0; j < times.length; j++) {
      times[j] = Math.round(times[j]);
      if (times[j] > maxTimes) {
        maxTimes = times[j];
      }
    }
    var height;
    if (times[i] === maxTimes) {
      height = INITIAL_HEIGHT;
    } else {
      height = (INITIAL_HEIGHT * times[i]) / maxTimes;
    }
    ctx.fillStyle = COLUMN_COLOR;
    ctx.fillRect(gap + 20, 95 + (INITIAL_HEIGHT - height), COLUMN_WIDTH, height);
    ctx.fillStyle = '#000000';
    ctx.fillText(times[i], gap + 20, 95 + (INITIAL_HEIGHT - height) - 5);
    gap += 90;
  }
  gap = 120;

  for (var i = 0; i < names.length; i++) {
    var COLUMN_COLOR;
    if (names[i] === 'Вы') {
      COLUMN_COLOR = 'rgba(255, 0, 0, 1)';
    } else {
      COLUMN_COLOR = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], gap + 20, 265);
    gap += 90;
  }

  gap = 120;
};
