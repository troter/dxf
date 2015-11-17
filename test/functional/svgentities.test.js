var fs = require('fs');
// var assert = require('chai').assert;

var dxf = require('../..');

function createTest(type) {
  it(type, function() {
    var dxfString = fs.readFileSync(__dirname + '/../resources/' + type + '.dxf', 'utf-8');

    var parser = dxf.createParser();
    var collector = dxf.createCollector(parser);
    parser.parseString(dxfString);
    var interpolated = dxf.interpolate(collector);
    var svg = dxf.toSVG(interpolated);
    fs.writeFileSync(__dirname + '/output/' + type + '.output.svg', svg, 'utf-8');
  });
}

describe('svg entities', function() {

  createTest('lines');
  createTest('lwpolylines');
  createTest('circlesellipsesarcs');
  createTest('splines');
  createTest('texts');
  createTest('dimensions');
  createTest('layers');
  createTest('blocks');
  createTest('hatches');

});