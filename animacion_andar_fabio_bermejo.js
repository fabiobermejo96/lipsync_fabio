(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animacion_andar_fabio_bermejo_atlas_1", frames: [[418,949,165,250],[418,0,352,947],[0,0,416,1361]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["animacion_andar_fabio_bermejo_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animacion_andar_fabio_bermejo_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["animacion_andar_fabio_bermejo_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADKMaQgfgCgNg2QgtjGAMjFQiGgClxAYQj3AQingFIgBAAQgGACgJgBIgxgBQgIgBgCgCIgCgBIgDAAIAAgIIAAhoQAEgTADgVQADghAAhBIgDlMQAAg3AZgNQAKgGAYAAIJYABQB8AAA6ADQBkAFBPARIAAnuQAAgYAIgJQAHgIAMAAQALAAAKAHQANAJANAYQBZChAkA9QBJB7BDBaQBZB5BiBXIAIAOQAGAHAQALIASAVQAGAGAHADQAeAmAWASQAWAbAVAYIAfAiIAFAGIgEANQgHAOgaATQg3AogjAjIgcAgIgJAIIgTAXQgMAOgYAVIgWAUIgLAHQgqAcg+BBQiPCYh9CqQgYAigWAAIgBAAg");
	this.shape.setTransform(89.1372,79.3764);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,0,174.7,158.8);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoIBMQgFgBgDgDQgFgHAAgKQAAgQAKgQQAKgOAPgJQAVgMAtgHQAOgCAGADQAFACADAFQADAFgCAEQgDAEgIADQgJAEgRACIgaAGQgOAEgKAIQgLAJgCANIgCAOQgCAHgFADIgFACIgDgBgAH6gPIgEgLIgFgKQgHgIgLgBQgMAAgIAHQgHAIgEACQgIAEgIgEQgHgFAAgJQAAgKASgMIAQgJQAXgIAWAOQAUAMAIAaQADAIgCAHQgCAJgIACIgDAAQgIAAgGgMg");
	this.shape.setTransform(53.3739,7.6596);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106.8,15.4);


(lib.Símbolo8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC2MTQgNgUgFgdQgDgPgEgnIgJhDQgFgogBgbQgCgZACgmQgcAGglgDQgMAAg3gHQg0gHhVgCQhvgEgbgCQgzgDhogNQhlgMg1gDQhkgGhfAIIgvACQgagBgTgIQgWgLgQgXQgOgVgHgaQgFgXABgdIACg0QAJhsAIg1QAShkAFgzQAHg7AAhqQABhBgCglQgCg4gIgsIgMhJQgCgYAEgTIASgPIASADQAQADA8ADQAlACBBAHQBJAIAcACQAdACA5ACQBEAIBgAJQC6ATBdAHQCKALByAEIgKhdQgIhOADgyQADg/AXgkQAJgPAOgMIAaAOIABAAIDPEhQAiAvARAVQAbAhAaAYQC7D7CnEDIgIAJIgwA8QgdAigmAmQgVAMgXAWQgdAcgfAiIgHAGIi+CkQhoBehvB/QgeAigiApQgZgLgQgXg");
	this.shape.setTransform(92.5477,82.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,185.1,164.3);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlWBHIjfgFQjhgHhygLQi8gTiQgsQgYgHgBgNQgBgIAGgGQAFgGAIgCQAKgCAWAHQBpAhBvASQB2ARC2ADIEtAHIBtAHQA/ADAtgBQAlAABRgGQBLgGApAAQAhAABPADQBIADAogBQAlgCBLgIQBJgIAmgBQAjgCBSADQBMADApgDQAngCBPgMQBNgMAogCIBugFQA/gFAogWIAUgLQALgHAKgBQAMgCAKAGQALAGACAKQACAOgNAKQgLAJgRAEQg6APhIAKQgvAGhWAIQidAOhRAFQhVAFipAFIjmAFIlLAIQhqAChSAAIg9AAg");
	this.shape.setTransform(126.2308,7.0982);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDFZQgkgEgVgMQgXAIgogQQhjgphihpQgmgngPggQgOgdgFgpQgDgbAAguQAAhCALghQAJgbAUgeQAggxArgjQAuglA1gQQApgMA1gCQAhgBA9AEQA0AEAXADQApAFAfALQBOAcA8BHQA1BAAhBYQATA1gBAiQgBAhgVAtQg1B4hhBDQgyAjg7AQQgsANgqAAQgRAAgPgCgAhLkzQhDACgyASQg5AWgqAuQgrAvgOA6QgJAhgBAyQgBBJAUArQAKAYAWAZQANAQAbAbQAxAvAhAWQAlAYAzAQIA9AOQBWAOBUgeQBWgeA2hCQATgYAbgrQAdguAGgdQAMgygihMQgehIgrgyQgzg6g+gWQgfgLhHgHQhKgHgoAAIgGAAg");
	this.shape_1.setTransform(118.9268,31.4049);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABZFXQhSgDhkgRQkzg1kWiFQiqhShkhaQiFh3goiTQgJgdAPgKQAFgDAHAAIANABQCOAXCyAKQBvAGDUADIHUAIQC3ADBbAAQGBABF/gfQARgBAIABQANABAIAHQAMAKADAZQAPCAicCLQiCBwiaBLQgvAWhgAnQhcAmgwARQhPAbhCAMQhBALhLAAIgqgBgArvA3QDvCIFJBKQCBAdBhAIQB8AKBogTQBDgMBQgdQAxgRBcgnQBqgsAwgYQCbhOBvhqQB1hygMhnIq+AbQiBAFhAgCQgfgChPgHQhGgGgngBQgvgBhPAEQhdAFghABQhDABhtgIQiIgJgogCQiXAAhMgDIgjgCQAKADAKAJQB+BuDJA7QBPAXBlASQBAALB4ARQBRALAlAEQBDAHAzgCQBKgBBcgSQA2gLBsgcQBSgVAogMQBDgUAzgWQBYgmBJg6QAWgSANAAQALgBAIAJQAIAIgEAJQgDAGgGAEQhlBVibA3QhiAii9AqQhKAQgiAGQg8ALgxADQg4ADhGgHQgqgEhUgNQiCgSg/gLQhrgUhTgZQjUg/iDh1QgSgQAEgNQADgGAGgCQhigIhHgXQA5DPETCag");
	this.shape_2.setTransform(125.3661,34.8182);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ANgBWQglgEg4gRQhKgWgRgEQg5gNhYgBQhhAAgxgCQgxgDhDgJIhzgQQl5g3nOAWQg6ACghAIQgyAKgfAZQgQAOgJgBQgJgBgFgJQgEgIACgIQAEgOASgNQAhgXAxgKQAhgHA5gDQGxgbGrA5IBtAPQA/AJAvADQAWABByADQBSABA0AIQAzAGA+ARQAjAJBNAYQAVAHABAMQAAAKgLAEQgHADgIAAIgGAAg");
	this.shape_3.setTransform(123.4804,19.5891);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ak/HcQhXgDhHgNQixgehxheQhIg9g4hhQgrhLgphvQhHjEgmjLQgBgHAAgHIgGgCIgMgEQAFgVARgKQAMgHAQAAQALAAATADICaAYQBKAMAnAFQA+AIAzAAQAxABBLgGIB8gLQBKgEBlACICuAGQCdAFB7gFQCXgFCBgUIBWgOQAygIAjgCQAsgDA5ACQAeABBGAGIC1APQAbACAJAKQAMAMgEAdIgOABQAGACADAHQAFAJgBAMQgBAdgNAkQgDAJgWA3IgnBoQgXA+gVAnQg2BihsBWQhOA+iFBKQihBZhvAkQhsAkiKAPQhgALicADIhiACIg+gBgAusgKQAqBwAsBKQA6BgBMA3QBWA+CAAYQBYARCUAEQC4AEB9gLQCogPCGgtQCFgsCshmQBlg9A+gzQBUhFAuhLQAbgqAWg7QANghAYhJIAriHQAGgSAJgEQgKABgIACIACgLQiQgShJgFQh5gIhhAKQgnADg9AKIhjAPQifAVkTgGQk9gHh3AIIh1AJQhEAEgxgCQgtgChBgLIhtgRIg0gHIABAAQALADAJAJQAHAGAHAMIALATQArBMBQA3QBJAzBcAbQBOAXBlAJQA9AGB6ADIClAFQCYAFBPgDQCBgFBkgYQB3gcBfg8QBphBA6hfIAPgXQAKgNALgFQANgHAPAGQAPAGABANQABAQgXASQgdAXg2A4Qg0A2gfAYQhDA2hiAkQh3AridANQhmAIi1gDQiZgDhUgGQiDgJhogVQkOg2haigIgRgcQgLgPgNgFIgMgDQgHgCgDgEQgJgHADgNQAEgMAKgFQAFgCAGAAQgzgGgvgCQAkDRBKDIgAPlj2IAEgGIABAFIgGADIABgCgAQCkkIABAAIgCABIABgBg");
	this.shape_4.setTransform(127.4056,52.7626);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Aj/EFQh8gjjEhPIgCABQgNABgHgHIgEgFQifhAhdguQiLhEhkhOQgpgggYgcQgfgkgMgmQgIgbAJgQQAQgaA6APQBlAaCRANQBcAIC5AGIMcAbQCnAGBTgCQAmgBDTgNQCXgKBhAGIByAHQBCACAvgNQAZgHAIAJQALAMgRAYQguBDgcAlQgqA4gpApQh/CAjJBMQifA8jjAiQiJAVhbABIgDAAQifAAi9g1gAkjB0QhBADh2AJIgmAEQBZAkBHAXQENBXDjgIQBagDB4gUQCDgVBigcQB6ghBhgxQBtg3BUhNQBahUAyhlQgwAKhEgDIh1gIIgvAAQADACADAFQAFAJgDAKQgEANgUAQQhzBZiwAwQhvAejTAeQihAWhWAIQBfAHBfAOQA8AIAkAJQA7APBjAsQAWAJAHALQAFAIgCAJQgCAKgIADQgJAEgRgLQhNgthugXQhEgOiFgMQhvgKgdgBQgkgCgnAAQgzAAg4ADgAv+hwQBDAvCCA9QCEA9BtAtQAKgEASgCQBPgKBPgGQjKgaiYhXQg6gihCg1QgmgfhNhFQgPgNABgLQg9gKhlgTQArBaBmBHgAqVgeQCcBEDeAKQCgAGDEgXQCAgQDigoQBKgNAkgJQA9gOAvgTQBjgnBPhKQAFgGAGgDIhBADIiFAKQjNAOk9gOQnNgUg8gBIjTgBQh8gBhXgIQg4gFhBgKQCVCOCMA/g");
	this.shape_5.setTransform(125.044,36.9407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.2,252.5,103.7);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHZARQgLgEgBgMQgBgBABgDIACgFQAGgKALAAQAFAAAFADQAFAEACAFQAEALgJAJQgGAFgGAAQgDAAgEgCgAnlARQgLgEgBgLIAAgFIACgFQAGgKALAAQANAAAFANQACAFgCAFQgBAGgFAEQgGAEgGAAQgEAAgDgCg");
	this.shape.setTransform(49.849,1.9212);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AGsALQgJABgEgCQgHgEABgGQABgHAPAAICBgBQAPAAABAIQACAFgIAEQgEACgJAAgAopAIIgKgBQgGgDgBgEQAAgFAHgEQADgBAJAAICNAAQAKAAADACQADAEAAAEQgBAFgEACQgDABgGAAg");
	this.shape_1.setTransform(50.5108,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},30).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,0,114.1,5.2);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(106.5867,200.8453);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-55.7,284.40000000000003,513.2);


(lib.Símbolo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAxCnQgFgIAGgIQAEgFAKgFQATgJAkgKQArgLAOgFQAigMATgTIAJgKIAKgJQANgJALAFQAGADADAGQACAHgEAFQgCAEgGABIgKADQgGADgFAGIgKAKQgKALgRAIIggANIhrAlQgJADgGAAQgHAAgDgFgAhgB7QgQgFgagOQgtgZgZgSQglgbgVgfQgPgUABgRQAAgRAPgNQANgNATgCQAegDAlAXQAZAQAtArQAlAjAaARIgUgfQgVgggIgSQgOgdgCgaQgCgRAKgFQAFgCAGAEQAFADADAFQACAGABARQABAKAEAJQADAJAKARQAYAqAOAVQAVAjAWAYQAFgGAIACQAJADACAHQACAIgFAHQgFAHgHACQgPAEgOgMQgJgHgJgRIgGgIQgEAEgIgBQgNgBgRgQIhYhNQgWgUgOgJQgVgOgUgBQgXgCgHAOQgGAMAMASQAKAPASAPIAiAaQAkAYAUAKQAhARAcACQANABAEACQAEABACAEQACAEgBAEQgCAGgJADQgJACgJAAQgMAAgOgEgAgChhQgoAAgUgEQgQgCgHgHQgEgFgBgHQAAgHAEgEQAFgEAIABIAPAEQASAGAoAAIBQAAQAxgBAUgFQATgEAXgLIApgUQAJgFAJABQAKAAADAIQADAKgTAKQg/AjgmAHQgZAFg0AAg");
	this.shape.setTransform(37.2473,238.4136);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPBCIgPgDQgPACgJgBQgNgDgQgRQgJgKgBgIQgCgMAKgNQALgNAbgPQAfgTAJgIQAJgIAGgDQAMgEAFAIQAFAGgGAJQgCAEgJAHQglAagQAJQgOAHgEAEQgDAFgBAFQAAAGAEAEQAEAEAHAAIAOgBIAWABQANABAIgFIALgHQAFgBAFAFQAEAEgBAGQgBAJgLAKQgNAJgKABIgDAAIgLgBg");
	this.shape_1.setTransform(65.8618,263.6617);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADcH7QgfgKgPgZQgRgZAJgXQAIgTAcgMIAWgIQAOgFAJgFQAOgIAEgBQAMgDAFAJQAGAJgJAJQgFAGgNAEIgsAQQgUAIgEAJQgFAKAGAMQAGALALAGQAQAKAUABQATABATgGQAigMAYgiQAKgNAEgDQAFgCAFABQAGAAACAFQAEAGgHAMQglA6g4AOQgMADgMAAQgRAAgSgGgAnDHZQgCgLAIgLIAAAjQgFgIgBgFgAFmGHQg5gjhEgGQgOgCgEgEQgHgJAMgVQAdgzgXhGQgHgZgRggIgdg4QgIgPAAgKQAAgHAEgGQAEgGAGgBQAZAmAgBMQATAsAGAbQAIAogLAfQgFARACAGQADAHAQAHIBNAbQAMAEAFgCQAHgCAHgMQAXguAEgyQABgsAEgVQAKgeABgQQACgWgLgmQgUhAg0iFQhJi+gwhiQgUgqgTgXQgVgaAOgKQAGgEAIAEQAIADAFAIQALANAOAdQB3D2BYEKQAJAaADAPQAFAYgBATQgCASgJAkQgDAUgCApQgDAegMAjQgHAVgRAqQgFAMgFADQgDACgEAAQgIAAgOgIg");
	this.shape_2.setTransform(104.6513,219.0191);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AqdGeQgCgKAIgMIAAAjQgFgHgBgGgAHPELQgFADgJAAIgygBQg2AAgagDQgWgDgrgKQgugKgYgJQgYgJgtgYQhDgjgigWQgTgNgIgEQgQgFAAgIQgBgFAGgHQAHgHAFgBQAJgCAMAOQAKALARALIAeARIBHAnQBFAhBMAOQBMAOBMgIQgJgKABgVIgBgjIgEgRQgDgLAAgHQABgQgCgHQgBgEgJgMQgGgJABgHQABgHAIgEQAHgDAHACQAOAGAEASQABAFABAZQABAJAEAVQADATABALIAAAaQAAAPAEAJIAIAQIABABIgBAOIgCAQIgFALIAEgYgAHwDzQgFgCgBgGQgCgFACgFQADgHAMgJQAhgYARgOQAagXASgWQAug5gEg7QgdgDggASQgVAMggAbQgbAXgBASIgBANQAAAIgDAEQgFAGgIgBQgIgBgEgGQgJgLAFgRQAGgWAcgaQAmgjAugYQAogUAXAMQATALAEAXQACASgIAZQgQAxgsAwQgeAgg7AuQgIAHgGAAIgFgBgAF2A+QgrgCgogQQgpgQgggcQgUgQglgtQgngvgOgTQgWgfgig2QgthIgSgmIgUgnQgLgWgLgPQgKgOADgIQADgFAGgBQAHgBAFADQAGAEAIAOQBICRBNBtQAcAoAgAnQAkAuAdAUQAXAPAlAPQAgAMAVAAQASAAAFACQAFACADAFQAEAGgDAFQgDAHgNAAIgEAAg");
	this.shape_3.setTransform(126.4638,224.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkG/QgCgLAIgLIAAAiQgGgHAAgFgAAcBxIg3gsQgdgXgJgOQgMgVgCgdQgCgxAZhBQAfhHAMglQAOg2AIgbQAWg5AIgdQAIgfAFgJQAHgNAKACQAKABABAMQABAGgEAMIgRAyQg3CegVA6QgTAzgFASQgMAnABAgQAAAZAKAQQAGALAUAPIA6AtQAIAGADAFQAFAJgGAGQgDAEgFAAQgHAAgKgIg");
	this.shape_4.setTransform(63.1914,221.6297);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACAIFQgCgKAIgLIAAAiQgFgHgBgGgAhYEEQgxgVgZguQgFgHAAgHQAAgIAGgDQADgDAFACQAEABADADIAKAPQAWArBHALQAjAFATgIQAKgEACgIQAAgIACgFQACgEAGgCQAFgBAFADQAJAFgBANQAAAOgMALQgLAJgRAFQgVAGgVAAQgdAAgcgLgAAfCfIg8gYQgOgFgCgIQgBgFAEgEQAEgFAGABQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQATAFAoATIANAGIAIAFQADAEgBAHQgCAFgFACIgEABIgMgCgAi9COQgMgCgGgLQgDgHACgHQACgHAGgBQAEgBAGADIAJAEQAGABALgDQALgEApgUQAfgPAWgDIgBgEQgCgMAAgRIAAgdQAAgQgCgZIgDgqQgCgtAIgYQAIgTARgWIAegfQAbgdARgLQAKgHAkgQQAXgKANgBQAGgBAHADQAGADABAFQACAJgJAFQgFADgLACQgjAHgbASQgPALgRAQIgeAgQgVAYgGARQgGAPAAAaQgBAWADAsIAEBNQACAMACAEIAGAFIAFAEQADAFgCAHQgCAGgGACQgFADgFAAQgEACgLAAQgYABgjAQQgtAXgNAEQgIACgGAAIgHgBgAjcAdQgFgCgCgFQgEgHAAgNQAAglgIhBQgKhKAAgdQgCg5AOguQAQg2AkggQAagXAzgVQCLg4CQgWQAigEAPgHQAOgGAGADQAFACABAGQABAFgCAFQgEAJgMAEQgMAGgRADIgfACQg3AFhFAUQgQAEhpAkQg2ASgWAPQgcATgSAhQgRAegHAlQgKA2ANBXIAIBHQAEAoAAAdQgBANgGAEIgFABIgFgBg");
	this.shape_5.setTransform(46.6656,214.573);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).wait(3));

	// brazo_derecho
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACuFYQgJgCgDgFQgDgEADgGQADgFAFgCQAGgCAQABQAtACAxgnQAQgNAVgWIAjgmQAigiAKgOQAWgggFgeQgBgJgFgCQgGgCgIAGIhyBOQgLAIgHgCQgGgCgCgHQgCgHAEgGQAFgIAQgIQAygaAoglQAOgMAGgEQAMgHALACQASADAJAWQAQAngaAtQgKAQgQATIgeAgIgqAsQgZAZgVAPQguAhgsAAQgMAAgMgDgACDE4QgFgBgCgDQgDgDgBgLQgBgNACgGQABgEAJgNIALgZQAGgQAJgFQAMgIATAEQAJACAFAEQAGAHgDAHQgDAJgPAAQgPAAgFAFQgBACgEAKQgDALgFAHIgGAKQgBAFABAKQgBAJgIAFIgFABIgDAAgAgUEwQgwgHgtgbQgmgWgmgnQgbgbgmgvQhHhWghg6QhKiCgPiyQgBgRAGgHQAEgEAGAAQAGgBAFADQAJAHgBAYQgCAZAEAkQAYDQDDDTQAgAjAZAVQAiAbAiAMQA3AUBFgLQANgCAGACQAFACACAEQADAFgCAEQgCAFgIADQgeAMgiAAQgOAAgQgDgADWEDIAAAAIgCADIgEAHQAAgHAGgDgABhC8QgYgHgYgTQgSgPgWgaQhvh/hSipQgWgsgGggQgFgbgCgFIgEgLQgBgHACgEQAEgGAJABQAIABAFAHQAEAFABAJIACAQQABARANAfQBPC9CGCWQAgAjAZAJQANAFATABIAhABQAIAAAHAEQAIAFgCAIQgDAJgRAAIgTABQgcAAgRgFg");
	this.shape_6.setTransform(125.8318,214.946);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABlIrQg8gJgugWQg2gagfgqQgQgVgBgTQAAgLAHgKQAHgKAKgBQAIgCAHAFQAHAEACAIQABAHgGAHQgGAGgHgCQAGAhAoAbQApAdAyAOQAyANAzgFQAtgFANgZQAFgKgDgIQgEgKgTgGQgsgQgigcQgKgIAAgGQAAgGAGgDQAGgDAGABQAHABANALQAXATAaAIIAWAHQANAEAHAHQAPAPgEAYQgEAXgRAQQgfAcg5AAQgTAAgVgDgAi9FkQgIAAgDgBQgNgHAJgfQAGgWgCgdIgIg0QgLhJgCiJQgEijgEhgQgHiQgNh0QgDgVAFgKQAEgHAIgDQAJgDAFAGQAFAEAAAIIgBAOQgDATAEAnQAHBJAJCuIAFCJIADCeQADBbANBDQAFAfAAALIgCAcQgCARABAKIC3gBQATAAAKgBQAQgDAJgIQgTgzgRhkQgnjagjj2QgEgigGgSQgNgfgEgQQgCgOACghQABgNAFgEQAGgEAIAEQAGAFACAHQACAKgEAUQAAANAHATIAMAeQAFAQAGAuIAVCXQAQBpAPBWIAQBbQAVBzASA3QAHAWgFAJQgEAHgOAFQgUAHgrAAg");
	this.shape_7.setTransform(108.5131,215.3283);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhxIVQgTgFgkgSQg3gcgZgSQglgbgnguQgqgzgNgpQgEgMABgJQABgMAKgFQAIgEAMAFQAGADAEAEQAEAFgCAGQgCAEgIAGQgEAIAFALQAHARAOASQAHAKATAVQAdAjAUARQAaAWAwAZQAmAUAZAIQA4AQA3gOQAMgCgCgHIgZgbIgbgaQgUgUgOgTQgJgMAAgJQAAgGAEgFQAEgFAGAAQAGABAEAFIAHALQALAXAgAeQAlAiALAQQAIAKgCAJQgCAGgIAGQgdATg2ACIgGAAQggAAgVgFgAiCFJQg8gUgggNQgygVglgYQgegWgtgrQgHgHgEgGQgLAagJAbQACgOgBgNQAAgLgDgGQgDgEgHgDIBPiqQASglALgRQAZgiAMgSQASgZAjhGQAfg/AZgfQAqgzBKgmQAugXBbggIElhlQALgDAKABQALABACAJQADAPgaAHQjKA8i+BKQgyATgXAPQgkAXggArQgUAaggA3IhsC6QgrBOggBIQAEABAFADQAJAGAHALQAhAwBAAgQAtAXBMAUQAWhwA5hiQAYgqAkgvQAVgdAtg4ICbi+QAYgeANgOQAWgXAVgOQAagRAcgGQAegFAZAJQANAEAEAIQADAEAAAFQgBAHgEACQgFADgOgDQgigKgmANQghANgdAcQgVAVgYAlIgpA+QgYAjg9BFQhWBegkA3Qg4BWgYBkQgKAkANASQAHAJAAAEQABAGgEAEQgFAFgFABIgFABQgIAAgLgEg");
	this.shape_8.setTransform(45.2786,208.0796);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjRHSQgCgEAAgGIgSADQgZACgigLQhHgWg7g0QgSgQgEgNQgFgPAJgQQAJgOAOgKQAigUA6AJQAfAEAWAKIgLgXQgKgTABgLQACgOAYgQICqh5QBYg+AmgnQBYhaAdh4IAOg/IAXgzQAPggAEgUQAEgTAEgFQAFgEAHAAQAHABACAFQABADgCAIIgpCRIgTA/QgqB2hZBXQgqAphbBCIipB5IBFCpQAFgBAFACQAGADAAAGQAAAEgEAFIgDAEIAAABQAQAHAUgHQANgEAVgMIBlg9QA9glAcgWQAYgVAbgeIAtg3QBBhRAcgqQAwhIAWg/QALgfAOg/IAgiLQAKgtAEgYQAFgmgDggQgDgTAEgIQADgGAGgEQAHgDAGADQAGAEACARQAAApgFAoQgEAcgNA6IgcB+QgNBBgNAkQgYBFgzBMQggAuhGBWQgtA2gUAUQglAkg1AiQgfAVhBAmIg5AeQgfAOgbAGIgNABQgOAAgGgIgAmJE4QgVAKgBATQBCBBBZAVQAfAGAQgHQgDgNgHgTIgag8QgGgBgIgEQgrgVgxgCIgGAAQgUAAgMAGg");
	this.shape_9.setTransform(60.425,217.1715);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABBKqQgqgKgUg9QgQgwANggQAEgPAPgRIAYgeIAZgoIABgBQgIAGgDAGIgIAOQgFAHgGgCQgIgCgCgNIgYiEQgNhQgQgzQgPgugghGIgzhzQgJgVgziVQgkhogjg+QgOgZAAgOQAAgMAHgIQAIgJAKABQALABACANQABANgKACQAfBHBLC9IBsESQAWA6AJAgQAJAhAMA7QAMBBAHAbQACAJAEADQAGAEAPgHIBkg0QAUgLAEgLQADgJgDgOQgdiWgUhSQgeh/glhjQgfhUhIicQgjhKgUglQghg8gkgrQgNgOgFgIQgJgNgCgMQgBgIADgGQADgHAGAAQAFABAHAIIAsA8QAiAvAOAYQAMAVAOAhIByD/QAeBCALAfQASAwAQA9QAKAnAPBIIAtDSIAEAXQAAANgEAJQgHAQgdANIg7AdQACAEgCAEQgBAEgNAHQgQAJgOAaQgUAjgEAGIgTATQgMAMgEAJQgLAVAJArQALAvAZALQAhAQAvgqQAkgfAegrQAog2gKgpQgFgTABgFQABgGAEgEQAFgFAGACQAGABAEAJQAPAggMApQgKAigaAjQgfAqgkAgQgsAngjAAQgIAAgIgDg");
	this.shape_10.setTransform(121.5745,229.0018);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjpDnQgfgGgmgNIhDgYIhdgkQgagLgGgMQgDgIADgIQACgJAIgDQAHgDAIAGQAIAGgDAHQBWArBbAbQA0AQAkADQAVACA4gCQA9gCAhgJQAUgGAvgXQArgTBXgiQA5gaAlgeQgDgJACgFQABgEAFgDIAHgHIACgDIACgHIAAgMQgHhlgyhaQgHgMgHgCQgIgDgMAGQgfAPgpAeIhEAyQghAXgsAYQgcAOg1AZQgfAOgPAFQgaAJgWAAQghAAglgTQgZgNgkgeQhBg0gdglIgVgaQgNgOgNgHIgNgGQgGgEgCgGQgDgJAKgGQAJgHAKADQAIACAIAJIAMAPQAnA5BaBIQAZAUAQAKQAZAOAWAEQAbAEAggKQAVgGAjgQQBegrAqgdIBTg9QAygmAkgRQAMgGAIACQAHADAGAKQApA7AVBGQAPA0ADA0IALAEQAJADAGAFQAGAHgDAHQgBAEgGADIgKAEIgMAHQgBAKgEAHQgGALgKAAQgFAAgEgEIgBACQgqAkhOAgQhzAvgOAHIgbAPQgRAIgNAEQgXAHgrABIgpAAQg7AAglgGgAFICgQgQgGgLgNQgPgTAIgQQAEgIALgBQALgBADAJQACAEgBAJQACAIAHAGQAHAEAJABQASACATgMQANgJASgSQAmgnAKgdQAMgggJgmQgIgkgYggQgVgegYgKQgOgHgQABQgQABgMAJIgJAHQgGAEgFgBQgHgCgBgJQgBgJAEgHQAJgNAPgGQAOgGAQABQAaACAdAVQAyAkAVA7QAVA9gWA1QgNAfgkAnQgqAsgkADIgGAAQgNAAgNgGg");
	this.shape_11.setTransform(149.1209,200.1757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},3).wait(3));

	// Capa_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADZNbIg4gEIk1gWQgWgCgGgJQgGgIAEgUQALg1AEhEQACglAAhUIACruQAAhmAJgyQAEgaAPg4QAOg1AFgdIABgGIAAgFQgGABgIgEQgbgKgcgNQgrgVgRgUQgLgOAAgMQgBgOAPgZQgJgLgUgKIghgQQgKgGgLgLIAAglIACADQARAVApAUQAcAPASAEQARADAcgDQAjgDALAAQARABADAJQADAGgFAGQgEAGgHADQgNAHgcABQgfABgMAEQgKADgGAHQgHAHABAJQACAHAJAJQAbAZAkAIIAVAFQAKAEAHAIIABAAIADgMQAJgjAdgsQAfguAcgQQAfgRA8ACQA4ACA4AKQALACAHAGQAJAHgEAIQgEAKgVgDQg+gLhFgBQgnAAgVALQgUAMgaAnQgaAqgGAUIgEASQAGACABAGQABAFgDAJIgEAOQACAIAEAHIAHAQQACAJgFAFQgGAGgJgFIgIgFQgaBdgIBiQgDAogBBnIgDFwQgBD7ACBgQACBPgCAjQgEA/gQAwIFyAaQAdACARgCQAYgEAPgNQARgRACgfQACgSgGgmQgRh5ASjeQAVjwgJhoIgHg+IgHg+QgHiegFhPQgJiMgihaQgFgMABgKQACgMAJgCQAOgCAHAYQAWBMAMBiQAIA8AHB1IAQD6QAGBdAAAuQAAAigHBZIgLCNQgGBTgBAoQgBBEAIA2IAHAwQAEAcgBAUQgBAagKAWQgLAYgUAMQgJAGgMAEIiAAAICAAAQgKADgNABIgRABIgggBgAlYriQgQgUABgOQAAgHAFgIIAHgOQAKgdAKgLQASgTAxABQA3AAAjACQAxAEAoAIQAaAFAxAOQAxAOAZAGIA2AKIAOACIAoAJQAIACAFAEQAGAGgBAGQgDAJgSgBQg1gEhfgaIgQgFIB/AAIh/AAQhXgYgsgFQgcgDgogBIhIgDQgfgBgNALQgHAGgJAUQgHAQABAJQAAAKAIALIAAAlQgLgLgNgQgAlArsIAAAAg");
	this.shape_12.setTransform(84.1512,218.7547);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ADKM2IlugaQgVgCgHgJQgFgIAEgUQALg0ADhEQACgmABhTIABrvQAAhlAJgyQAEgWALgpQgSAXgMALQgcAYgcgBQgQgBgMgLQgNgLgBgPQAAgIAFgTQAGgSgDgJQgbAGgagJQgQgEgCgKQgCgGAEgIIAKgNQAJgMALgaQArheAwgpQAagUAMgLIAWgUQAJgHAYgMQAugXAcgFQAUgEANAFQANAFACAKQACAFgCAGQgCAGgFACQgGACgNgEQgOgEgPACQgNACgXALQgZALgPAKIghAbIgaATQgPAMgJAJQgMANgNAUQgmA9gXA9QAogBANgRIAGgLIAGgLQAGgMAOgGQAKgDAJADQAKADACAIQADAKgMANQgIAKgTARQgPAQgDAPIgBAMQAAAIgCAFIgFAOQgDAIAEAFQAEAEAJAAQAYAAAUgTQAQgOANgaQAKgTALACIADABQAIghADgUIACgGIgBgFIgCgBQAEgLAAgQIABABIACgNQAKgiAdgsQAfguAcgQQAfgSA7ACQA5ADA3AJQALADAIAFQAJAIgEAIQgFAKgVgEQg9gKhFgBQgoAAgUALQgVALgZAoQgaApgHAVQgDAJgBAJQAGABACAGQABAFgDAJIgFAOQACAIAEAIIAHAPQADAJgFAFQgGAHgKgFQgEgCgDgEQgbBdgHBiQgEApgBBnIgCFwQgBD6ACBgQABBPgCAjQgEBAgQAvIFzAbQAdACAQgDQAZgDAOgOQASgRACgfQABgSgFglQgSh5ATjfQAUjvgJhoIgHg+IgHg/QgHiegFhPQgJiLgihaQgEgMABgLQABgMAKgBQAOgCAGAXQAXBMAMBiQAHA9AIB1IAQD6QAGBcgBAuQAAAjgGBZIgLCNQgGBTgBAnQgCBEAIA2IAIAwQAEAcgCAVQgBAagKAVQgLAYgTANQgSALgbADIgRAAIgfgBgAi0pEIADgBIACACIgFgBgAAXs2IADAAIAAABIgDgBg");
	this.shape_13.setTransform(85.7462,211.2446);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ADZNbIltgaQgWgCgGgJQgGgIAEgUQALg1AEhEQACglAAhUIACruQAAhmAJgyQAEgaAPg4QAOg1AFgdIABgGIAAgFQgGABgIgEQgbgKgcgNQgrgVgRgUQgLgOAAgMQgBgOAPgZQgJgLgUgKIghgQQgUgNgZgfQgQgUABgOQAAgHAFgIIAHgOQAKgdAKgLQASgTAxABQA3AAAjACQAxAEAoAIQAaAFAxAOQAxAOAZAGIA2AKQAiAGAUAFQAIACAFAEQAGAGgBAGQgDAJgSgBQg1gEhfgaQhkgcgvgGQgcgDgogBIhIgDQgfgBgNALQgHAGgJAUQgHAQABAJQAAAMAKAMQARAVApAUQAcAPASAEQARADAcgDQAjgDALAAQARABADAJQADAGgFAGQgEAGgHADQgNAHgcABQgfABgMAEQgKADgGAHQgHAHABAJQACAHAJAJQAbAZAkAIIAVAFQAKAEAHAIIABAAIADgMQAJgjAdgsQAfguAcgQQAfgRA8ACQA4ACA4AKQALACAHAGQAJAHgEAIQgEAKgVgDQg+gLhFgBQgnAAgVALQgUAMgaAnQgaAqgGAUIgEASQAGACABAGQABAFgDAJIgEAOQACAIAEAHIAHAQQACAJgFAFQgGAGgJgFIgIgFQgaBdgIBiQgDAogBBnIgDFwQgBD7ACBgQACBPgCAjQgEA/gQAwIFyAaQAdACARgCQAYgEAPgNQARgRACgfQACgSgGgmQgRh5ASjeQAVjwgJhoIgHg+IgHg+QgHiegFhPQgJiMgihaQgFgMABgKQACgMAJgCQAOgCAHAYQAWBMAMBiQAIA8AHB1IAQD6QAGBdAAAuQAAAigHBZIgLCNQgGBTgBAoQgBBEAIA2IAHAwQAEAcgBAUQgBAagKAWQgLAYgUAMQgSAMgaACIgRABIgggBg");
	this.shape_14.setTransform(84.1512,218.7547);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADXNyIltgaQgWgCgGgJQgGgIAEgUQALg1AEhEQACglAAhUIACruQAAhmAJgyQAEgaAPg4IAKgnQgxgIg4g5QgegegPgZQgLgWAAgPQABgKAEgIQAGgJAIgEQAJgDAMACQAfACAbANQgLgUgbgbQgggggKgNQgdgngDgwQgCgXAHgSQALgcAdgJQANgEASABQAYAAAQAHQASAHAYAYIArAqIAiAmQAUAVATAKQATAJAgAHQApAHANAEQALAEAEAFIAAABQAwADAwAIQALACAHAGQAJAHgEAIQgEAKgVgDQg+gLhFgBQgnAAgUALQgVAMgaAnQgaAqgGAUQgDAJgBAJQAGACABAGQABAFgDAJIgEAOQACAIAEAHIAHAQQACAJgFAFQgGAGgJgFQgFgCgDgDQgaBdgIBiQgDAogBBnIgDFwQgBD7ACBgQACBPgCAjQgEA/gQAwIFyAaQAdACARgCQAYgEAPgNQARgRACgfQACgSgGgmQgRh5ASjeQAVjwgJhoIgHg+IgHg+QgHiegFhPQgJiMgihaQgFgMABgKQACgMAJgCQAOgCAHAYQAWBMAMBiQAIA8AHB1IAQD6QAGBdAAAuQAAAigHBZIgLCNQgGBTgBAoQgBBEAIA2IAHAwQAEAcgBAUQgBAagKAWQgLAYgUAMQgSAMgaACIgSABIgfgBgAj1pWIABAEQgDAGgBAGQAOAgAqAjQAqAkAhAEIADgQIABgGIAAgFQgGAAgIgDIgBAAIABgBQAJgFgBgTIgBgGIAIAHIABAAIADgMQAJgjAdgsQAfguAcgQQAKgFAMgEIgKgDQgXgGgQgKQgVgMgXgYIgmgqQgYgagWgSQgRgOgNgDQgJgDgSAAQgaAAgKAJQgMAKAAAWQgCAzA0A5IAqAsQAYAbAMAWQAFAKgBAGQgBAKgMADQgJACgLgFIgQgHIgQgIQgYgLgbADIACAJIAAgGQADADAFADgAllrbIABgBIABAEIgCgDg");
	this.shape_15.setTransform(84.4894,225.3221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},3).wait(3));

	// Capa_1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("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");
	this.shape_16.setTransform(87.7814,197.4979);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("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");
	this.shape_17.setTransform(96.9119,193.5214);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("EgM4AmlQgIgLAWgTQAXgVAUglIAAgCQAAgLADgEQACgDAEgBIABgBIAahCIgogSQgZgMADgPQACgGAGgEQAGgDAHAAQAJABAPAJIAgARIAaguQAXgmAJgUQAUgqAQhGIAchzQAOgvAmhXIBbjVIAihMQAUgqAUgfQAfgrAOgWQALgRAVgpQAUgmANgUQAshCA4gQQATgGAFAKQAHAOgcALQgeANgaAeQgRAUgYApIguBLQgyBSgXArQgmBGgYA8IgWA7QgNAlgKAWIgYAvQgPAcgIATQgIAVgHAcIg5DIQgSA/gPAdQgHAOgPAYIgWAlIgGANQApATAlAMQBOAYBEgJQARgDAJACQAZgjAYhJQAsiFARhIQAPhQALgnQALgpAZg/QAnhgBdi5IAghAQAGgMAIgGQALgIAIAGQAMAHgIAUQgFAPgWAkQgXAkgaAyIgrBaQgqBbgOAlQgVA3g6DlQgsCwg7BgQgGALgHACQgHACgGgHQgEgFgBgFQggAFgVgBQgrgBhHgZIgLgEQgBAEgCAEQgDAHgNAKIgDADIBIAAQAVAAAKADQAPAEAXAQIBAAuQATAAADAJQACAEgCADIAEADQAHAFACAFQACAHgGAGQgGAGgIgBQgLgBgPgNIgDgCQiqAPitACQgPAAgFgGgEgLlAlbQgQAegSATQCGgLCOgFIgfgVQgVgOgSgDIgQgBIhYgCIgCAAIgEAFQgEAEgGAAQgGAAgEgEIgCgCgEgLTAk1IgBAAIAYACIADgBIABAAIALgMIASgSIAHgHIgqgQIgVA0gEALZAj9QgIgFgEgQIgLgoIgFAUIACADQAKATAAAPQgMAHgGgCQgFgBgEgFIgIABQgEgLgCgKIgFgEQgEgEgCgDIgBgIIgBgHIgEgLIgFgKQgDgHgBgPQAAgJADgHQADgIAJgBQAHAAAFAJQADAEACAKIACAJIAKgTIgdggIgBAGQgSgCgTARIggAgQgkAhhJAEIg8ABQgjABgXAFIhCiBQgshYgghKIg/iUQgnhUgpg4QgVgcgvgzQgTgWgFgMQgEgLABgLQACgLAHgIQAHgHAMADQANACgBALQAAADgDAHQgDAGAAAEQgBAIAMALQA3AyAtBLQAlA6AkBVIA/CUQAlBXAjA5QAVAiAFASIAEARQAEAJAGADQAEACAMAAIBYgDQAygCAXgMQASgJAVgVQAXgaAMgLIAFgFQg1hAguhDIggguQgTgagRgRQgMgLgngfQgygmgdgbQgqgngagmQgWghgcg/QgghIgQgbQgWgng7hJIhChSQgvg8gdgaIglgdQgXgSgNgNQgNgNgBgKQgBgHAFgGQAFgGAGABQAFAAAFAGIAHAKQAJAOATAOIAiAXQAWAQAlAvIByCNQAoAxARAbQARAcAXAyQAaA8AKATQA5BqBgBFIAgAXQAUANALALQAXAUAXAhIAoA7QAvBIA8BBIAEAEIAcAdIAIAIQA4hLBTgtQAOgHALgDIALgRIAIAZQAGATAGANQgFADgGgBIgJgEQgeAhgeBBQgpBYgOAWQgIANgKAGQgHAEgGAAQgFAAgEgDgEALrAh3QgLANgJAOQAEALADAYQAEAUANAEQASgyAYgrQANgWAggzQg7AnggApgABXhfQgXgDgMgEQgTgHgJgMQgNgRACghIACgaQAAgPgCgLQgFgTgNgDQgEgBgGABIgLADQgNAEgHgJQgGgIALgQQAGgKAHgCQAGgCANAEQAXAJAGAFQATAPADAfQABAKgCArQgBAeAPAJQAIAEAQgBQASAAAGAEQAGACACAGQADAHgDAFQgEAHgOAAIgGAAgACBkZQgUgOgRgYIgKgOQgGgHgHgCQgLgDgOAIIgXARQgVAQgegEQgdgDgSgVQgIgIgCgKQgCgMAHgHQAKgIALAHQAEADACAFQACAGgCAFQAOARAagDQATgDATgQIANgLQAIgHAIgBQAUgGAUAVQAGAGAJAMQAJAOAFAFQAWAYAgAGQAUADABAJQABAGgHAFQgGAEgHAAIgDAAQgXAAgWgPgAjsnfQAJhoAOhoIAeAAIgVDQgAiAnjQgIgEAAgMQABgHADgOQADgMABggIAGhNQAEgugDgfQgBgOABgEQACgKAKgBQAJgBAEAKQADAFAAAMQACA6gDAdIgFA2QgEAhACAWQACAWgEAJQgDAHgHAEQgFACgDAAQgEAAgDgCgAgkrlQgYgBgrgIQgygKgbgHQgqgLgggQQgngShCg0IgegYQgSATgeABQgcABgagNQgTgKgbgWQgigcgJgGIgYgPQgNgJgIgJQgKgLgEgMQgFgPAEgMQAIgVAZgIQAKgDAOgBIgageQh9iRgbiaQgCgOADgGQACgFAFgDQAFgCAFACQAFADACALQAcCZB1COQAUAYAXAYQBLABArAGQAMACAEADQAEADACAEQACAEgCADIAFAEIAyAoQAOAMAJgEQAGgDABgJQABgIgEgHQgKgVgdgNQgkgNgQgIQgJgEgFgGQgFgIAEgGQAFgGAPACIBVAPQhcgvhVhgQg2g9hVh9IgvhEQgGgJACgGQABgHAPgEQAagIAcgSQARgLAfgYQCIhpBlgwQCOhFCDADQAnABAwAIQAdAEA6AMID3A0IAZAGIgPgVIASAOQAMALAHACQAGACAGgBQAEgBACgDQAVAmAXA2IAkBVIgTAAIgCANQgHAfAAA5QgBA+gEAZQgLBIgxBVQgOAYgRAZIADABIAFACIAAgBQACgIAKgCQAMgDAQAGIAbANQAdAJAvgTIgggYQgTgNgCgPQgBgOAKgMQAJgJANgGIAAgBIAEgHQADgIgDgMIgJgUQgEgJgEgTQgFgUgDgJQgHgTABgEQAAgHAEgEQAFgFAGAAQAKABAEATIATBEIAKAZQAFARgDAPQgCALgGAEQgFADgGgBIABADQABAEADADIgPAJQAAAMAVAJQAXAKAFAJQAGAKgHANQgGALgMAIQgeATgogCQgkgDgjgTIgIgFIgBALQgBAIAHAPIAZA2QAIARgFAJQgEAJgSACQgfACgwgRIgdgLIgZAeQg0A7hvByQgXAXgNAKQgVASgVAIQgYAJgfAAIgIAAgAnAu7QAQABAZARQAIAGAEAGIAFADQAEABACADIABACIAmAcQAyAlAdARQBhA3BvAFQAzACAdgNQASgHATgPIAfgcQBVhUBIhTIAUgYIgLgGIgqgiQgZgVgTgIQgegOAEgOQABgHAHgDQAHgDAHABQAJACAOAMQAwAqAeAUIALAHIAEADQAVATAYALQAIAEAFAAQAGAAAEgGQAVAFAUAAQgKgggNgYQgJgTgBgGIAAgBIgJANIABgKQAAgHgDgGQgDgHgEgFQArg+Aag6QAWgvAHgnQAEgcABgtIAEiEQAAgPAGgFQADgCADgBQgUgwgaguIgHgLIgFgBQhbgZjRgrQg3gMgbgEQgtgIgkAAQiXgEimBeQg+AjhNA4IiFBkIBJBqQBABcAnAsQA/BHBDAiIAbAOQAOAJAGALQAIAOgHAQQgHAQgOgCQAVAWAEAWQACANgFAMQgFANgLAGQgYAMgogdIg1goQgJgHgCgHQgmgCgnAAIAKAKQgHAAgIAEQgGADgDAEIgVgUIgmABQgMABgEADQgGAEAAAJQAAAIAFAHQAEAFAIAFIANAIQAOAHAQAOIAcAXIgBgCQgFgPABgKQAAgJAHgMQAPgbAdgNQAQgIAMAEQAHADAEAHQADAIgDAGQgEAGgKABIgRACQgQADgIAPQgJAPAFAOQAFAQALAAQACgLAKgHQAJgGAKAAIADAAgAmquDIAPABIACABQgIgDgLgNQgMgOgKABQAKAKgGANIgEAFQALABAKgDgAJCziQAEgBAEgCQABAHgBAGIgIgKgAD0zkIgFAAQgEgCgDgFIgEgKQgEgHgBgEQgDgIAGgHQADgGAHABIAAgCIAPACQAKACACAGQADAGgEAOIABANQgCAFgGACIgGABIgFgBgACx1pQgDgEAAgLQAAgMACgGQACgGAJgJQAXgYAQgCQABAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQANAAADABQAJADABAIQAAAJgJAFIgRAEQgRAGgLANQAGAEgBAIQAAAHgFAGQgGAGgGABIgDAAQgGAAgEgFgAHv2KIgBgFQACALADAKIgCABIgCgRgArm2ZQgGgJgKgBIgHAAIAJgqQhBgRgygrQgegZgCgZQgCgWASgYQASgZAcgOQAdgOAfAAQgbgQgNgLQgUgRgIgUQgJgVADgoQAGhGAWhDQAEgFAGABQAHABAEAFQAEAGACARQAHBDAuA2QAvA2BBARIAEABIAKgNQgEgTAJgfQAwiXBbh+QBLhoBSgzQA7gkBsgfQBqgfB0gVIBNgOQAsgJAfgMQAZgKBDgjQA6geAkgKQAUgFAJAFQAOAHAGAdQAGAbASA7QAQA3AGAeQAVBogfBFIgJAVQgGAMgBAKQgBAMAGAKQAFAMALADQAEABAMgBQAKAAAFADQAKAGACARQAIA0gXA+QgPAognBBQgGALgJAGQgLAHgHgGQgMgJAPgZQAkg2AQgnQAWg2gGgvIhGgRQgLgDgDgFQgEgHAJgOQAigzAMhTQAGgugEggQgDgfgQgzIgdheQgEgQgIgEQgJgFgRAHIhwAyQhCAcgwANQgbAHgnAHIhCAMQg8ALiIAmQgxAOgZAJQgpAOgeASQg4Ajg8BOQgvA7glA+Qg4BfgTBSIAIgJQAZgdAXgUIgDAEIgCADQgFADgGAIQgYAegCAUIgCAQIgVAZIAAAJIgHABIgGAIIgBACQAEAEACAFQACAIgDAGQgFAIgLABIgKgBIgJAOQgSAAgTACIARgaQgwgWgngjQgwgrgbg4QgIAjgBAVQAAAfAQATQAIAKAQALIAbASQANAMAFAQQAFARgKAMQgJALgWAAQgagCgMAAQgUABgRAOQgQAOgFATQALAfAlAVQAXAOAwAPIAHADIABgEQAFAJAHAFQAGAFAJABQgMAlgHAnIgEgHgAk2+ZIAEgBIgDACIgBgBg");
	this.shape_18.setTransform(116.3775,189.675);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(95.3,310.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-1.85,-39.05,0.5,0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("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");
	this.shape_19.setTransform(96.5315,191.2962);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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");
	this.shape_20.setTransform(115.3433,187.9544);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_18}]},3).to({state:[{t:this.instance_1},{t:this.instance}]},3).to({state:[{t:this.shape_19}]},3).to({state:[{t:this.shape_20}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-65.2,208.70000000000002,506.3);


(lib.Interpolación10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoIBMQgFgBgDgDQgFgHAAgKQAAgQAKgQQAKgOAPgJQAVgMAtgHQAOgCAGADQAFACADAFQADAFgCAEQgDAEgIADQgJAEgRACIgaAGQgOAEgKAIQgLAJgCANIgCAOQgCAHgFADIgFACIgDgBgAH6gPIgEgLIgFgKQgHgIgLgBQgMAAgIAHQgHAIgEACQgIAEgIgEQgHgFAAgJQAAgKASgMIAQgJQAXgIAWAOQAUAMAIAaQADAIgCAHQgCAJgIACIgDAAQgIAAgGgMg");
	this.shape.setTransform(0.0239,0.0096);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-7.6,106.69999999999999,15.3);


(lib.boton_torso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnfF3QhohSgyhiQgthbAAhoQAAiPBVh0QAtg+BFg2QDHiaEYgBQEZABDGCaQA3ArApAwQBoB+AACeQAABzg2BhQgyBZhgBKQjGCckZAAQkYAAjHicg");
	this.shape.setTransform(67.9,53.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AteD2QgEgDgBgHQAAgHAEgEQAFgHAPgGID8hqIIljkQAPgGAIABQAHABAEAEQAFAFgBAGQgBAJgQAFQkZBvkTB1QiEA4iDA5QgIAEgGAAQgFAAgDgCgAFUgPQgOgBgMgIQgSgNgNggQgSgtASgaQARgYAngBQAagBAaAKQAZAKATASQAQAQAFAPQAEAQgIARQgHAQgOAKQgaASgogCQgJAHgNAAIgDAAgAFOiIQgTACgHALQgKAOAKAbQAIAYAOAIQAFAEADgDIAEgFQADgFAIABQAEAAAHADQAYAIAYgNQAOgJACgLQACgLgIgKQgFgIgMgHQgOgJgUgGQgPgFgOAAIgIAAgAKmgfQgRgKgKgDQgRgEgHgFQgGgDgDgGQgDgHADgFQAFgIAKABQAFAAALAEIAsATQADgSgcgYIgkgdQgXgSADgQQABgHAGgFQAFgFAIgCQAMgDAQAGQAOAGABAIQABAKgSAIIAVASQANALAIAIQAXAYAAAaQAAAXgPAIQgFACgHAAQgIAAgKgEgAHcgfQgEgFAAgKIAAg0QABgfgEgUIgDgPQAAgIACgGQAFgLANgDQAMgDAOADQAeAIAKASQAIAPgGAUQgGAQgMAQQARAMAVgBIAMgCIANgBQAGABAFAFQAFAFgBAGQgBAJgPAEQgaAIgbgIQgbgIgSgVQgDAIAEATQADARgFAJQgDAGgIACIgEABQgFAAgDgDgAH0iSQACAOgBAdQAAABAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIAAgCQAAgBAAAAQAAAAABgBQAAAAABgBQAAgBABAAIAJgJQAHgIACgDIACgKQABgKgBgDQgEgHgJgBIgHAAIgHgBIACAPgAMSgfQgPgFgJgRQgHgLgEgUQgGgXABgPQABgXALgNQANgOAVgBQAUgBARAKQAQAJALARQAKAQACATQACAegSAUQgKAKgRAHQgPAHgMAAQgGAAgGgCgAMRiNQgGACgDAJQgDALAFAYQACALAEAHQAEAHAGAEQAEAEAFABQAEAAAMgFIAMgGQAEgEADgJQAEgOgGgPQgGgQgNgIIgHgDIgUgBgACYglQgEgEgCgMQgDgUADgZQABgOAGggIAHgnQACgLADgGIAAAAQgtAIgegFQgPgCgFgGQgEgEgBgFQgCgGAEgFQAFgFAPABQBIAGBIgUQARgGAKACQAHACAEAHQAFAGgDAGQgDAJgTACIg/ALQADADABAGQABAGgCALIgHAhQgKAyADAYQAFABAEAEQADAEAAAFQABALgKAHQgGAFgHABIgDAAQgGAAgEgEg");
	this.shape_1.setTransform(189.0871,20.4674);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnfF3QhohSgyhiQgthbAAhoQAAiPBVh0QAtg+BFg2QDHiaEYgBQEZABDGCaQA3ArApAwQAaAgATAhIj8BqQgPAGgFAHQgFAFABAGQABAHAEADQAIAFAOgGQCDg6CDg4QAuBaAABoQAABzg2BhQgyBZhgBKQjGCckZAAQkYAAjHicg");
	this.shape_2.setTransform(67.9,53.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.3,275.9,110.39999999999999);


(lib.boton_rodillas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACLDAQg+g9AAhYQAAhXA+g+QA+g+BXABQBYgBA+A+QA+A+AABXQAABYg+A9Qg+A/hYAAQhXAAg+g/gAm1BqQg+g+AAhWQAAhYA+g+QA+g9BXgBQBYABA+A9QA+A+AABYQAABWg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape.setTransform(50,25.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AR+DoQhFgZhOgVIgPgEQgygNg/gNIiCgaQlJhDlEhhQgWgHgMACIgLADQgHABgFAAQgLgBgQgPQgJgJAAgIQgBgGAEgFQAFgEAGgBIAIAAIABgBQAHgEATAAQCaAHDsAyQFOBFA1AJQBIAMBYAJQCLAPCzAIIBhAFIC1AJIDKAKQAWABAJAIQAHAGABAJQAAAJgHAFQgFADgQgDQgigJgrgFQgagCg1gDIhGgCIimgGIimgIQiLgIh1gNQhNgJhDgLQgqgGlnhKQiwgkiFgNQE8BdFEBBQCbAfA8APIAJACQBEARBqAiQAVAHgBAMQAAAKgMACIgGAAQgIAAgIgDgAwmAZQgMgEgDgKIg4AEQgNABgFgFQgHgHAHgSQATgygDg4IgDgoQgCgYADgQQACgKAHgHQAIgHAHADQAIADAAALQAAAGgDANQgDAQADAdQAEAhAAAMQgBANgGAcQgGAaAAAPQAcgEAUAAQAUAAAJAIQAIAHgBALQAAAMgJAFQgGAEgGAAQgEAAgEgCgA3YAaQgKgCgTgKIgVgLQgqgWgRgSQgfgeACgjQABgTANgSQALgRASgLQAdgRAbAEQAuAGAhBEQAYAxgGAhQgEAWgQAPQgPANgRAAIgGAAgA3NgQIAHAEQACAAADgDQAOgRgLghQgKghgWgcQgNgQgKgFQgOgHgRAFQgPADgOALQgRANgDAPQgEAVAWAZQAYAbAjAPQAPAFAIgBIALgDIADAAQAEAAACACgA1yANQgFgFgBgHQAAgEAEgUQAFgUgGglIgOhoQgDgRAIgGQAGgEAOAFQAeAOAXAVQAoAlAXA+QAOAmgMAVQgMATgcADQgKACgOgBIgYgDQgLgBgFADIgKAGIgEABQgEAAgEgDgA1VgdQAJAIAQAAIAbAAQALAAADgCQAKgHgFgSQgJglgWggQgXgfgggVQAMBFADBHgAvgAGQgHgFAAgSQABg2gIg6QgCgPgEgHIgGgIQgDgEgBgEQgCgHAFgGQAEgHAGgDQANgFAHAFQAHAFABAQIANCOQAJADARgGQARgHAJABIAGACQAEg0AMgyQAEgQABgLQABgOABgEQADgKAHgCQAIgDAIAHQAGAFAEAKQAVAoAOAqIACAAQALAAAHAHQAJAIgFAKQgDAGgLABQAEAOgDAJQgDAHgHAEQgIADgGgEQgEgDgBgIIgBgOIgBgHIgbAAIgOgBIgFAkQgDAYgNgBQgHgBgEgHQgEADgIACIgwALIgMACQgHAAgEgDgAtphdIAbACIgSgtQgFAQgEAbgAzHAIQgFgCgCgGQgCgGACgHQABgEAEgHIAGgLQAGgOgCgWIgFgmIAAgcQAAgRgCgKIgDgPQgCgJABgGQABgIAFgFQAHgGAHACQAMADABAXIAFBXQACAXgCARQgBAYgJAYQgFAKgEAEQgFAFgGAAIgFgBgA8DACQgJgEABgTQAChHgQhDIgEgaQAAgPAHgJQAHgIAVgHQAZgIAPgCQAWgCAQAIQAVAMAMAdQANAggHAZQgEAPgKAKQgMALgOABIBRA5QALAHAAAHQABAGgGAFQgGAEgHgBQgKgBgNgMQg2gthAgUIAFA3QABASgEAHQgCAGgHACIgGABQgDAAgDgBgA7TjLQgOACgTAGQgIAEgCACQgDAFAEAOQADAHACAPIAFAeQAkAAATgDQAPgCAHgGQAIgJgBgPQgBgIgHgQQgHgRgJgGQgHgEgKAAIgLABgArzgNQgFgDgDgFQgDgFACgGQADgJASgBIA/gFQAjgDAPgJQghgigpgVQgPgIgHgGQgLgJgBgMQgCgPAPgMQAJgHASgHQAOgFAHABQAGABAEAEQAEAEABAFQABANgUAFIgOAEQgIADgDAFQAwAZAqAmQANAMADAJQACAKgFAKQgFAKgKAFQgLAHgeAEIhJAIIgLABQgIAAgEgCg");
	this.shape_1.setTransform(-97.8733,9.2153);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACLDAQg+g9AAhYQAAgoANghIBGACQA0ADAaACQArAEAiAJQAQADAFgDQAIgEgBgJQgBgJgHgGQgIgIgWgBIjLgLQAPgaAWgWQA+g+BXABQBYgBA+A+QA+A+AABXQAABYg+A9Qg+A/hYAAQhXAAg+g/gAm1BqQgmgmgPgwIAPAEQBOAVBFAYQAMAFAKgCQAMgCAAgJQABgMgVgHQhqgihEgRIgJgCQgCgPAAgQIABgXQB1ANCLAHICmAIQgCBTg8A8Qg+A+hYAAQhXAAg+g+gAivhHQiygJiMgOQANg3ArgrQA+g9BXgBQBYABA+A9QA1A1AIBJIhigFg");
	this.shape_2.setTransform(50,25.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-280,-14.3,380,65.2);


(lib.boton_pies = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGREAQhXgRhKhKQhKhKgShYQgRhXAygyQAygyBXASQBZARBKBKQBKBKAQBWQASBYgyAyQgmAlg6AAQgUAAgWgEgAoVCZQg2g2AQhdQAQhbBNhNQBMhNBdgQQBcgQA3A3QA2A2gQBcQgQBchMBNQhNBNhdAPQgVAEgUAAQhAAAgqgqg");
	this.shape.setTransform(57.5703,25.9941);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AodE4QgEgDAAgGQgBgHAPgKQAPgKATgSIATgRIAOgNQAjgeA1gaQAfgPBCgbQCUg7CFg7ICfhFIB4g2QgbAFgdAEQgbAEhjAKQjDAUliA+Ql8BBiqAUIiMAPIgmAEIhkALQgIABgEgDQgGgEADgIQADgIAHgEQAQgKAjgCIBRgGQDpgVFxg/QHdhTDMgTQBLgHAbgFQA5gJAqgRQAMgFAJAAQAMAAADAJIABAEIAFAAQAIABAEAHQAEAHgDAGQgCADgIAEIhfAtQgkARgfANQhEAYghAPIhBAgQghARg2AWIkPBwQgrASgWAKQgjASgYAUQgJAHgWAVIgIAHQgXAWgRALQgLAIgIAAQgGAAgFgEgANlAeQgIgGgCgGQgCgGADgGQADgGAGgCQAKgEAQADIAVADIAWADQAYACAtgLQAVgGAGAKQAGAHgIALQgFAGgNAEIgpAQQgXAHgUAAQghgBgcgSgASEAAQgLgDgUgKQgMgGgEgFQgEgDgFgIQgEgKACgIQABgFAEgDQAEgEAEABQAFAAAEAEIAHAIQALAPAUAGQAIADAMAAIAUAAQAQgBAEgBQAEgBAUgKIANgGQAHgEADgGQAFgMgMgOQgKgLgegOQhBgegYgrQgJgOAAgPQAAgRANgQQAIgLATgNQArgbAigFQAMgCAFAFQAEAEABAFQAAAGgDAEQgEAHgNAEIgVAEQgSADgeAVQgUAPgBAMQAAAJAJAMQAYAiAzAYQAVAJAKAGQAZARAFAYQADANgEANQgEANgKAIQgFAFgWAKIgPAIIgPAGQgKACgTAAQgZAAgMgCgANPAAQgIgGABgPQAAgOADgMIAEgTQAEgQgCgpQgEhKgJgoQgDgOACgIIABgDQgEgJAIgIQAGgFAKgCQAPgDAUgBIA+gFQAdgBAIAMQAIALgHALQgGALgOgBQgEgBgDgDQgDgDAAgEQgxACgxAFIABAFQAIAtADAsQAWgLAVgBQANAAARAEQAUAEAIAGQAGAFACAIQACAIgFAGQgFAIgJgCQgJgBgDgIQgWgHgUACQgUACgJAJIgGAHQACAugDAsQgBASgGAIQgEAGgGABIgGABQgEAAgDgBgAIZgLQgJgCgEgHQgGgKADgVIANhfQAGg2gFgoQgFgcAGgMQADgFAFgDQADgLAOgGQAMgHAYgCQAbgDANAEQAVAGANAVQAMAUABAZQAAAUgIAOQgLAQgdAKQgdAKgfgBIgMgBIgKCQQgBAKgDAEQgDAEgGAAIgEAAgAJckcQgXADgJAGIgBABIAAAFIgEBAIAGAAQAcAFAbgJQASgGAFgLQAEgHgCgQQgDgXgNgIQgHgFgPAAIgLABgALegRQgKgFACgUIAHhOQADgugCghIgDguQgBgbAFgTQADgKAFgDQAIgEAJAHQAFAGAEAKQAGAPgBAJQgBAGgEAFQgEAFgGAAQAIAlgDA7QgGBUABANQAAATgEAHQgCAGgHADIgGABQgDAAgDgBg");
	this.shape_1.setTransform(159.0863,1.3058);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AGREAQhXgRhKhKQhKhKgShYQgRhXAygyQAygyBXASQBZARBKBKQAiAhAVAlIgTARQgTASgPAJQgPAKABAIQAAAFAEAEQAFADAGAAQAIAAALgHQARgLAXgXIAIgHQAOAfAGAhQASBYgyAyQgmAlg6AAQgUAAgWgEgAoVCZQg2g2AQhdQAQhbBNhNQBMhNBdgQQBcgQA3A3QAQAQAKATIhRAHQgjACgQAJQgHAFgDAIQgDAIAGAEQAEACAIgBIBkgKIAmgEQAJAkgIAtQgQBchMBNQhNBNhdAPQgVAEgUAAQhAAAgqgqg");
	this.shape_2.setTransform(57.5703,25.9941);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30.3,288.6,82.3);


(lib.boton_mano_izquierda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4C5QhNhNAAhsQAAhrBNhNQBNhNBrAAQBsAABNBNQBNBNAABrQAABshNBNQhNBNhsAAQhrAAhNhNg");
	this.shape.setTransform(26.2,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(-123.1818,11.2348);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai4C5QhNhNAAhsIAAgIQCNAVCOASQAIABADgCQAGgDAAgHQAAgIgFgEQgGgGgSgCQiHgQiFgVQALhUA/g/QBNhNBrAAQBsAABNBNQBNBNAABrQAABshNBNQhNBNhsAAQhrAAhNhNg");
	this.shape_2.setTransform(26.2,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.4,-6.8,328.79999999999995,59.199999999999996);


(lib.boton_mano_derecha = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai4C5QhNhNAAhsQAAhrBNhNQBNhNBrAAQBsAABNBNQBNBNAABrQAABshNBNQhNBNhsAAQhrAAhNhNg");
	this.shape.setTransform(26.2,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(192.1818,37.4341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai4C5QhNhNAAhsQAAhrBNhNQBNhNBrAAQBsAABNBNQBNBMAABsIiTgMQgTgCgEAJQgCAFACADQABAFAEADQAGAEAMACQAiAFBDAFIAtACQgKBahCBCQhNBNhsAAQhrAAhNhNg");
	this.shape_2.setTransform(26.2,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,349.1,53.7);


(lib.boton_hombros = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKQEAQA2hhAAhyQAAiehoh+QAwgWA6AAQBtAABMBNQBNBNAABrQAABshNBNQhMBNhtAAQgdAAgbgGgAuBC5QhMhNAAhsQAAhrBMhNQBNhNBtAAQBUAABBAvQhVB0AACPQAABoAtBaQgyAXg7AAQhtAAhNhNg");
	this.shape.setTransform(97.425,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(192.0503,3.634);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AKQEAQA2hhAAhyQAAiXhfh5IDYgGQAkASAeAfQAtAsATA4Ig1AfQgIAEgFAFQgFAIADAHQAEAIALgBQAFAAALgHIAtgZQAFAaAAAcQAABshNBNQhMBNhtAAQgdAAgbgGgAuBC5QhMhNAAhsQAAhrBMhNQBNhNBtAAQBUAABBAvIgFAGQhAAOg4ATQgMAEgHAHQgIAKAFAIQAIAMAXgLQApgQAwgNQg6BlAAB2QAABoAtBaQgyAXg7AAQhtAAhNhNgALIkFIAQABIgzABQARgCASAAg");
	this.shape_2.setTransform(97.425,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16.6,357.9,69);


(lib.boton_codos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuVCMQghg1AAhLQAAhLAhg2QAhg0AuAAQAuAAAgA0QAhA2AABLQAABLghA1QggA2guAAQguAAghg2gAL4B1Qggg1AAhLQAAhLAgg1QAhg1AugBQAuABAhA1QAhA1AABLQAABLghA1QghA1guAAQguAAghg1g");
	this.shape.setTransform(95.075,19.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA9COQgIAAgNgHIgbgLIgjgMQjohEjvgtIgdgFIgKAFQgOAHgGgBQgKgBgCgLIgBgCIgCAAQgRABgJgDQgGgDgEgFQgEgGABgGQAEgQAeAEIAgAGIARgDQC+gYDAAMQA/AEBaAKIBKAJICFARIBeALQEGAaHSgHQGkgGDbAHIBaAFQAQABAHAFQAFADABAGQACAHgEAEQgFAFgNgBIhigEQjbgImaAGQnSAGkFgaIhmgMIiEgQIhWgJQhXgJg+gEQiXgJiSAMQDtAuDRBBIAzARQALADAGAFQAIAHgCAIQgCAFgFADQgFACgEAAIgCAAgAu7A4QgwAAgugUQgJgEgFgGQgGgHADgHQAEgIALABQAFAAAMAFQA8AaA/gRIg7gzQgTgRgHgLQgLgVAJgQQAHgMATgFQAXgFAKgEQAOgFAHgBQANgBAFAKQADAFgDAGQgCAGgGAEQgFADgSAEQgVADgVAHQALAVAbAWQAhAZAOANQAKAIABAIQADANgQAMQgXAQgmAAIgEAAgA1bAoIgRgDQgMAAgCgBQgIgEAAgKIACgQQAKgigLgiIgFgRQgDgKAAgHQgBgJAEgIQAEgIAIgDQANgFAVAPQApAcAUAVQAeAeAJAhQAFAPgFALQgJATgoABQgkAAgSgEgA1gAIQAaAHA3gEQgDgPgHgMQgIgQgQgPQgTgRgmgZQAOAwgEAxgA6gAaQgkgBgfgOQgXgLgIgOQgIgRAIgYQAMggAigXQAZgQAogMQALgEAHABQAMACACAIQADAKgKAHQgEADgOADQhHARgTArQgFAMADAJQAEAIAPAGQAzASA0gOQAOgFAHABQAGAAAFAEQAEAEAAAFQABALgTAGQgdAJgfAAIgIAAgA4GAQQgMgDgFgGQgJgIAFgIQAEgGAJAAIAPACQATAFAWgCQAIgBADgDQAFgFgCgIQgBgLgMgUQgUgggVgGQgJgEgVABQgJAAgFADQgIAFgBAMQgBARANANIAMAKQAGAGAAAHQgBAFgEADQgEAEgGAAQgJAAgKgIQgTgRgEgfQgDggASgQQAMgKAVgCQAngEAeAaQAQAOAOAXQAPAZACARQACAcgSANQgMAJgXAAQgUAAgVgFgAySAUQgQgBAAgJQgVADgTgNQgTgNgGgVQgFgTAHgTQAGgTAPgNQAPgNAUgEQATgFAUAFQAdAIASAYQAJAMAHARQANAigKAUQgKATgbAGQgJACgQAAIgUgBgAy1hVQgQAKgCAPQgBAIAEAPQAEALAGAEQAEACAIAAIAWAAQAWAAAEALQAEgBALAAQAJABAFgDQAHgFABgKQABgIgDgJQgGgRgIgKQgPgSgUgEIgMgBQgPAAgOAJg");
	this.shape_1.setTransform(-0.1045,16.276);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AuVCMQgOgWgHgZIAbALQANAHAIABQAGAAAFgCQAFgEACgFQACgIgIgHQgGgFgLgDIgzgRQgEgXAAgaQAAgbAEgYIBWAJICEARIABAZQAABLghA1QggA2guAAQguAAghg2gAL4B1QgZgqgGg4IBiAEQANACAFgGQAEgEgCgHQgBgGgFgCQgHgFgQgBIhagEIAAgBQAAhLAgg1QAhg1AugBQAuABAhA1QAhA1AABLQAABLghA1QghA1guAAQguAAghg1gAthg7IhKgJQAIgaAOgXQAhg0AuAAQAuAAAgA0QAUAhAIApIiFgQg");
	this.shape_2.setTransform(95.075,19.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,0,370.2,38.7);


(lib.boton_cabeza = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkIFsQhuiWAAjWQAAjUBuiZQBuiWCaAAQCbAABuCWQBuCZAADUQAADWhuCWQhuCYibAAQiaAAhuiYg");
	this.shape.setTransform(37.5,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ArqBuQgCgEABgGQABgFAEgDQAEgFANgFIBAgZQBBgYAngMIB+gkQBLgXAxgVQAPgGAIgBQAOgBAIAIQAEAFAAAGQAAAHgFAEQgDADgHAAIgMAAQgLABgVAJQgcAMggALQgaAHgqAMIhDATQhHAWhGAbIg/AaQgKAEgHAAQgJAAgEgGgALNBdQgJgGABgIIACgGIADgHQABgDgBgJIgBgKIgQAAQgaABgPgEIgBAAIAAACQgEAVgEAMQgEAMgGAFQgEADgFABQgFAAgDgEQgFgEACgOIALgyQAHgfAHgSQAJgcAQgRQAQgRAOAFQAKADAIAPQAKAVAIAkIAEAVQAGADACAHQABAHgFAGIAEAOQAEAQAAAGQAAAOgJAGQgFADgFAAQgHAAgGgEgAKWAFQAHACADAHIAkAAIgCgNQgHgdgJgWQgTAUgJAjgACVBSQgUgEgGgLQgDgGAAgLQAAgiACgaQABgWgJgXQgHgOABgGQACgJAJgFQAJgEAKABQAZADASAUQASAUgBAZIAAAMQAAAGACAFQACACALALQAOAOADATQAFAXgQAMQgIAGgSAAQgWAAgWgEgACUAyQADAFAJAAIAqgCQACgGgIgKQgJgMgKgGQgGgDgHgCIgPgEQAAAfgBAJgACRg6IACANIACAHIAAAIQAAAFACADIATAAIgCgJQgBgLgFgHQgGgJgKAAIgBAAgAEGBTQgGgEgCgGQgCgKAHgIIAAgCQgCgEABgLQADgTgBgOQAAgVgKgmQgDgRAFgGIAEgDQABgDADgCQAEgEAIABIAOACIAPACIAZAAQARABAGAGQAFAHgBAJQgDAKgIACQgEABgJgCQgPgDgQAAIgRAAQADAOACAPIAZgBIAVABQALACAHAGQAFAFADAIIABAJQgQABgHgBIgIAAIAAgBQgSgBgOACIgHABIAAAdIgBAGQAmgHAfAHQAOAEAEAIQACAFgCAIQgDAMgIAAQgEABgGgEIgJgGIgMgBIgeABQgPABgFAEQgGAHgDABIgGACQgDAAgDgCgAHFBEQgQAAgFgIQgFgIAIgKQAEgEANgGQAfgPAZgUIgcgHQgKgDgEgDQgIgHACgHQABgKANgCQAHAAANAEIAmALIAFgGQAGgGgBgFQgBgEgKgEQgkgJgmAEQgVACgGgIQgDgGACgHQADgGAGgEQAGgEAUAAQAxACAgAKQAXAHAFAOQAEALgJAQIgGALQAJADAEAEQAHAIgDAKQgCAJgHACQgEABgGgCIgKgGIgJgFQgRAQgYAQQAJADARgDQARgCAJAEQAGADACAHQADAHgEAFQgFAHgQAAgAgZBAQgJgIAIgUQAdhFAohFQAGgLAHgCQAJgCAHAKQADAFACANIAOBfQABACABADIgBAEIADAPQACARgDAHQgDAGgGADQgGADgFgDQgHgEgCgOIgCgRIAAAAQgRgBgIgDQgKgEgJgJIgCgCQgHAPgEAPQgGARgDAFQgFAFgGABIgDAAQgFAAgDgDgAAfgUIABABQAIALADACQAGAEALAAIgFg2QgNASgLASgAiMA4QgmgDgYgVQgWgVgCggQgBggATgYQASgYAfgIQAfgHAdAKQAMAFAEAFQAEAEAAAFQABAGgDAEQgFAHgMgCIgSgGQgSgGgSAEQgTAFgNANQgMAOgBAUQgBAUAMANQAOASAbADQAVACAbgGQAWgEAKAEQAIADADAJQADAJgGAFQgEAEgLABIgiADIgTABIgPgBg");
	this.shape_1.setTransform(138.5994,26.6525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkIFsQhuiWAAjWQAAjUBuiZQBuiWCaAAQCbAABuCWQA5BPAbBfIhAAYQgNAGgEAEQgEAEgBAFQgBAFACAEQAHALAXgIIA/gaQASBMAABWQAADWhuCWQhuCYibAAQiaAAhuiYg");
	this.shape_2.setTransform(37.5,51.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213.5,103.2);


(lib.boton_abdomen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkFEFQhthsAAiZQAAiZBthsQBshtCZAAQCZAABsBtQBtBsAACZQAACZhtBsQhsBtiZAAQiZAAhshtg");
	this.shape.setTransform(37.05,37.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ATrDRQhJgTiCgdQiUggjegtQlshKjOg9QgLgDgHgGQgIgHADgIQACgIAMgBQAIgBALAEQBXAeBwAcQBDAQCIAcIISBwIDhAvQAKACAEAFQAFAFgEAIQgDAIgHACQgEACgFAAQgIAAgMgDgAlBBeIgMgGQgGgDgJAAIgyAAQgMAAgGgDQgKgFAAgKQABgIAJgDQAFgCALAAIAkgBQAVAAAKACQARAEAJAKQAIAHgBAJQAAAEgCAEQgDAEgFABIgBAAQgFAAgFgEgAibBgQgKgBgMgPQgggmgNgxIAABJQgBAZgNADQgGABgGgEQgFgFgCgGQgBgGACgUQAFgcgEgpIgFhHQAAgQAIgEQAGgDAHAFQAGAEAEAIQANAVASA1QARAvAQAYQAFAIAFgBQAEAAAEgGQAGgLgDgXQgEgtgBhKQgBgOADgHQAGgNALABQAGAAAEAFQAEAEABAGQABAIgDAPQgFAdACAdIAEAfQACATAAAMQAAAngUAUQgKALgKAAIgDAAgAw2BHQgMgDgXgKQgOgGgEgHQgEgGACgSQAIhKgThHQgFgTAAgLQAAgQAKgIQAKgIASADQAbAEAXAQQAWAQAMAZQAIASgBATQgCAVgPAKQAUAIASAkQANAcgCAQQgDASgQALQgPAMgUABIgFAAQgOAAgRgFgAxOAWQAAAHACACQACADAHACIAaAHQARADAGAAQALgBAHgFQAIgGgBgKQAAgEgDgGIgGgIIgJgUQgEgHgLgHQgZgQgbgBgAxdiEQAIAaACAaQAAAGAEACIAEAAIAhgDQAIgBAEgDQAGgFgBgJQgBgSgUgVQgIgIgGgEQgGgDgKgCIgRgEQgEAGAEAPgAufA5QgFgEgBgHQAAgFAEgSQADgPgEgiIgRh7QgCgLADgGQAFgGAKACQAIACAIAGQA4AqAhA+QAXAtgQAYQgQAXgpABQgSAAgGAGIgHALQgFAHgFABIgCABQgEAAgEgEgAuCACQAKAHAVgEQAXgFAEgLQACgIgIgNIgWglQgPgagKgLQgJgIgMgHgAytAkQgHgngIgnIgMAAQgVgBgLgCIgGAvQgEAVgGAHQgFAGgIAAQgJAAgDgGQgEgHAEgMQAMgxAGg2IAEgzQAEgdAIgVQAGgPAKgCQAKgCALAMQANASAJApIAPBEIAEACQANADAEALQABAGgCAFQgDAGgFACIgFAAIAOBBQADANgBAHQgDAMgLABQgNAAgEgYgAzlhIIAKgBIAZAAQgLgvgMgsgArsArQgSgIgQgYQgSgcgBgaQgBgiAYgTQALgKAQgCQAPgCANAHQAMAHAKARQATAhAAAmQABAkgWAOQgJAGgNABQgMAAgLgGgAr8hHQgEAFgCAFIAAAPIAAAPQACAIAIAOQADAJADADQAGAIAOAEQANAEAFgFQAEgEAAgJQABgcgDgLQgDgIgNgWQgDgGgEgCQgDgCgDAAIgDAAQgLAAgHAHgAmfAwQgFgBgDgFQgDgFAAgFIADgWQADgLgEgPIgCgBQgFgEgBgGQAAgFADgFIgDgKQgFgTgBgXQgBgUAHgIQAHgIAUgBQATAAAPADQANACAGAFQAFAEABAFQABAGgDAEQgEAHgSgBIgmgDQgBAOAEASIABACIAJgFQATgFALAKQAFAEADAIQAEAJgCAIQgDAJgJABQgGABgFgFQgEgEgCgHQgHADgGAEQAKAmgJAYQgFAPgLAAIgDAAgAptAkQgEgHABgIQABgGAEgIIAHgMQAEgLAAgRIgDgcQgBgWAEgjQAEgYALgDQAIgDAIAGQAGAGADAIIAEARQADALADAFQABgIAIgGQAIgFAIACQANAEAIAVQASAsAJAvQAIABAFAHQAFAGgCAIQgBAIgHAEQgIAEgHgCQgOgEgHgaIgShDQACAegPAFQgIADgJgFQgIgFgEgJQgCgFgDgLQgDgMgDgFQANA0gYAwQgGAMgIABIgBAAQgGAAgFgGg");
	this.shape_1.setTransform(-105.5984,19.8833);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkFEFQhthsAAiZIABgJQCBAbBKATQAUAFAJgEQAHgCADgIQAEgHgFgGQgEgFgLgCIjhguQANiBBeheQBshtCZAAQCZAABsBtQBtBsAACZQAACZhtBsQhsBtiZAAQiZAAhshtg");
	this.shape_2.setTransform(37.05,37.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.6,-1.3,309.7,75.39999999999999);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Símbolo2("synched",0);
	this.instance.setTransform(199.15,457.9,2.0552,2.0552,0,0,0,96.9,222.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJCGQgWgBgUgKQgmgRgUgpQgQghADggIgBgGIAAgBIAAgBIAAgBIAAgDIAAgCIAAAAIAAgBIAAgCIABgDQAEgtAighQAjgiAtgCQArgCAmAfQAlAeAIAsQADASgCAPQACAagJAZQgKAcgWAVQgWAUgdAIQgRAFgQAAIgJgBg");
	this.shape.setTransform(291.182,166.5099);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.1,-114.6,584.4,1054.8);


// stage content:
(lib.animacion_andar_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Neutral:8,"Neutral":15,"Neutral":40,"Neutral":44,"Neutral":48,Oh:58,Uh:63,S:66,Woo:69,"Oh":73,M:74,"Oh":77,"Woo":80,"M":83,"Woo":86,"S":90,Ee:92,"Oh":95,"Woo":97,"M":100,"Oh":103,"M":105,"Woo":108,"M":110,"Woo":111,"M":113,"Oh":115,"Neutral":120};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,40,41,124];
	this.streamSoundSymbolsList[40] = [{id:"a",startFrame:40,endFrame:135,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_40 = function() {
		var soundInstance = playSound("a",0);
		this.InsertIntoSoundStreamData(soundInstance,40,135,1);
	}
	this.frame_41 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.button_12.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(41);
		}
	}
	this.frame_124 = function() {
		/* Detener en este fotograma
		La línea de tiempo se detendrá/pausará en el fotograma en el que se inserte este código.
		También se puede utilizar para detener/pausar la línea de tiempo de clips de película.
		*/
		
		this.stop();
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop(125);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40).call(this.frame_40).wait(1).call(this.frame_41).wait(83).call(this.frame_124).wait(11));

	// Capa_10
	this.button_12 = new lib.Símbolo11();
	this.button_12.name = "button_12";
	this.button_12.setTransform(230.95,605.2,1,1,0,0,0,89.8,58.4);
	this.button_12._off = true;
	new cjs.ButtonHelper(this.button_12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_12).wait(41).to({_off:false},0).to({_off:true},1).wait(93));

	// cuerpo
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(394.95,52.85,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).to({_off:true},1).wait(9));

	// botones_cuerpo
	this.button_10 = new lib.boton_cabeza();
	this.button_10.name = "button_10";
	this.button_10.setTransform(494.55,110.35,1,1,0,0,0,37.5,51.6);
	new cjs.ButtonHelper(this.button_10, 0, 1, 1);

	this.button_8 = new lib.boton_codos();
	this.button_8.name = "button_8";
	this.button_8.setTransform(495.25,327.45,1,1,0,0,0,95,19.4);
	new cjs.ButtonHelper(this.button_8, 0, 1, 1);

	this.button_11 = new lib.boton_hombros();
	this.button_11.name = "button_11";
	this.button_11.setTransform(488.85,228.4,1,1,0,0,0,97.4,26.2);
	new cjs.ButtonHelper(this.button_11, 0, 1, 1);

	this.button_9 = new lib.boton_torso();
	this.button_9.name = "button_9";
	this.button_9.setTransform(492,232.9,1,1,0,0,0,67.9,53.1);
	new cjs.ButtonHelper(this.button_9, 0, 1, 1);

	this.button_7 = new lib.boton_abdomen();
	this.button_7.name = "button_7";
	this.button_7.setTransform(493.9,345.15,1,1,0,0,0,37.1,37.1);
	new cjs.ButtonHelper(this.button_7, 0, 1, 1);

	this.button_5 = new lib.boton_mano_izquierda();
	this.button_5.name = "button_5";
	this.button_5.setTransform(428.55,448.25,1,1,0,0,0,26.2,26.2);
	new cjs.ButtonHelper(this.button_5, 0, 1, 1);

	this.button_4 = new lib.boton_mano_derecha();
	this.button_4.name = "button_4";
	this.button_4.setTransform(579.5,438,1,1,0,0,0,26.2,26.2);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.button_6 = new lib.boton_rodillas();
	this.button_6.name = "button_6";
	this.button_6.setTransform(507.85,555.4,1,1,0,0,0,50,25.4);
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.button_3 = new lib.boton_pies();
	this.button_3.name = "button_3";
	this.button_3.setTransform(512.7,695.8,1,1,0,0,0,57.6,26);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_3},{t:this.button_6},{t:this.button_4},{t:this.button_5},{t:this.button_7},{t:this.button_9},{t:this.button_11},{t:this.button_8},{t:this.button_10}]},125).to({state:[]},1).wait(9));

	// cejas
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AoIBMQgFgBgDgDQgFgHAAgKQAAgQAKgQQAKgOAPgJQAVgMAtgHQAOgCAGADQAFACADAFQADAFgCAEQgDAEgIADQgJAEgRACIgaAGQgOAEgKAIQgLAJgCANIgCAOQgCAHgFADIgFACIgDgBgAH6gPIgEgLIgFgKQgHgIgLgBQgMAAgIAHQgHAIgEACQgIAEgIgEQgHgFAAgJQAAgKASgMIAQgJQAXgIAWAOQAUAMAIAaQADAIgCAHQgCAJgIACIgDAAQgIAAgGgMg");
	this.shape.setTransform(610.1739,362.0096);

	this.instance_1 = new lib.Interpolación10("synched",0);
	this.instance_1.setTransform(610.15,362);
	this.instance_1._off = true;

	this.instance_2 = new lib.Símbolo9("synched",0);
	this.instance_2.setTransform(606.35,236.55,1.9434,1.9434,0,0,0,53.4,7.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},40).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},21).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_2}]},2).to({state:[]},22).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true,regX:53.4,regY:7.8,scaleX:1.9434,scaleY:1.9434,x:606.35,y:236.55},4).wait(87));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},4).wait(7).to({startPosition:0},0).to({y:222.15},2).wait(21).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:236.55},2).wait(20).to({y:233.85},0).wait(2).to({y:236.55},0).to({_off:true},22).wait(10));

	// Capa_8
	this.button_1 = new lib.Símbolo8();
	this.button_1.name = "button_1";
	this.button_1.setTransform(206.65,625.25,1,1,0,0,0,92.5,82.1);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(124).to({_off:false},0).to({_off:true},1).wait(10));

	// boca
	this.instance_3 = new lib.Símbolo7("single",0);
	this.instance_3.setTransform(617.75,392,0.5231,0.5231,0,0,0,126.2,7.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40).to({_off:false},0).wait(4).to({startPosition:0},0).to({regY:7.1,scaleX:1,scaleY:1,x:617.7,y:302.25},4).wait(10).to({startPosition:1},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:7},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:1},0).wait(4).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:1},0).wait(5).to({startPosition:0},0).to({_off:true},5).wait(10));

	// ojos
	this.instance_4 = new lib.Símbolo5("synched",0);
	this.instance_4.setTransform(614.3,379.25,1,1,0,0,0,49.8,1.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40).to({_off:false},0).wait(4).to({startPosition:0},0).to({regX:49.9,regY:2,scaleX:1.983,scaleY:1.983,x:614.5,y:276.25},4).to({_off:true},77).wait(10));

	// cuerpo
	this.instance_5 = new lib.Símbolo3("synched",0);
	this.instance_5.setTransform(605.05,566.9,1,1,0,0,0,199.2,457.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({_off:true},76).wait(10));

	// Capa_2
	this.instance_6 = new lib.Símbolo2("synched",0);
	this.instance_6.setTransform(605,525.9,1,1,0,0,0,96.9,222.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({startPosition:0},4).to({regY:222.8,scaleX:2.0552,scaleY:2.0552,y:567.1},4).to({_off:true},1).wait(86));

	// Capa_1
	this.instance_7 = new lib.Símbolo1("synched",0);
	this.instance_7.setTransform(-105.25,433.5,1,1,0,0,0,88,217.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:500.7,startPosition:3},39).to({_off:true},1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,917.1,1049.4);
// library properties:
lib.properties = {
	id: 'B26D90A8B0F16946995325AF9E993DA0',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/animacion_andar_fabio_bermejo_atlas_1.png", id:"animacion_andar_fabio_bermejo_atlas_1"},
		{src:"sounds/a.mp3", id:"a"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B26D90A8B0F16946995325AF9E993DA0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;