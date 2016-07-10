module.exports = function(robot) {
  robot.hear(/(.*)/, function(response) {
    re = ['0.0', '關你屁事'];
    response.send(response.random(re));
  });
}