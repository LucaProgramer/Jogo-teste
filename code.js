var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d896c022-101c-431c-becc-3da62950eab3","33c3f6f9-80ec-471b-b97d-a25be91e9aab","e85bad6d-a5c3-491a-bad6-50330d1fc029","418f112f-1c04-4641-9b83-6c28ddfde832"],"propsByKey":{"d896c022-101c-431c-becc-3da62950eab3":{"name":"base","sourceUrl":null,"frameSize":{"x":56,"y":108},"frameCount":3,"looping":true,"frameDelay":12,"version":"F6FJtS2mCEwBunk.fpbJ_EvrOftPgra9","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":216},"rootRelativePath":"assets/d896c022-101c-431c-becc-3da62950eab3.png"},"33c3f6f9-80ec-471b-b97d-a25be91e9aab":{"name":"walk","sourceUrl":null,"frameSize":{"x":56,"y":108},"frameCount":3,"looping":true,"frameDelay":3,"version":"gy3KbPyGJ6Q_DHfD4.yKFn7.WEfa7HLI","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":216},"rootRelativePath":"assets/33c3f6f9-80ec-471b-b97d-a25be91e9aab.png"},"e85bad6d-a5c3-491a-bad6-50330d1fc029":{"name":"punch","sourceUrl":null,"frameSize":{"x":100,"y":117},"frameCount":2,"looping":true,"frameDelay":5,"version":"vCu5yHNN.CeJqDdcvGtQUBOoIh61u_pu","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":117},"rootRelativePath":"assets/e85bad6d-a5c3-491a-bad6-50330d1fc029.png"},"418f112f-1c04-4641-9b83-6c28ddfde832":{"name":"special","sourceUrl":null,"frameSize":{"x":109,"y":104},"frameCount":4,"looping":true,"frameDelay":2,"version":"xQjt2P4bEZA53uZrakakKylN6eApgnum","loadedFromSource":true,"saved":true,"sourceSize":{"x":218,"y":208},"rootRelativePath":"assets/418f112f-1c04-4641-9b83-6c28ddfde832.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamemode = "server";
var vida = 100;
var player = createSprite(350, 350, 1, 1);
player.setAnimation("base");
player.scale = 0.9;
var cubo = createSprite(200, 200, 20, 20);
player.setAnimation("base");
player.scale = 0.9;
var chao = createSprite(200, 400, 400, 15);
var chao = createSprite(200, 400, 400, 15);
function draw() {
  if (keyDown("space")) {
    gamemode = "play";
  }
  if (gamemode=="play") {
    background("white");
    textSize(25);
    textFont("longShotFont");
    fill("red");
    text("vida: " + vida , 5, 190);
    drawSprites();
    createEdgeSprites();
    player.collide(edges);
    player.collide(chao);
    player.velocityY = 5;
    showMobileControls(true, true, true, true);
    if(keyDown("a")){
          player.x = player.x-7;
        }
    if(keyDown("d")){
          player.x = player.x+7;
        }
    if(keyDown("w")){
          player.y = player.y-10;
        }
    if(keyDown("s")){
          player.y = player.y+7;
        }
    if (player.isTouching(edges)) {
      player.setAnimation("base");
      player.scale = 0.9;
    }
    if (player.isTouching(cubo)) {
      vida =  vida - 10;
    }
    if (keyDown("o")) {
      player.setAnimation("punch");
      player.scale = 0.9;
    } else {
      player.setAnimation("base");
      player.scale = 0.9;
    }
    if (keyDown("p")) {
      player.setAnimation("special");
      player.scale = 0.9;
      player.x = player.x-7;
    }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
