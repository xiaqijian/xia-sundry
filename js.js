'use strict';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

window.addEventListener('DOMContentLoaded', function() {

    var $canv = document.getElementById('fireworks');

    // Create a universe
    var fireworks = new FireworksUniverseThingy($canv);

    // Start render loop
    fireworks.start();

    $canv.addEventListener('click', function(e) {

        // The coordinates of the click
        var coords = {};

        coords.x = e.pageX || e.originalEvent.touches[0].pageX || e.originalEvent.changedTouches[0].pageX || 0;
        coords.y = e.pageY || e.originalEvent.touches[0].pageY || e.originalEvent.changedTouches[0].pageY || 0;

        var speedMagnitude = 700;

        // Add a new particle source
        fireworks.addSource({

            // The gravity of the source
            gravity: 0.2,

            // The lower limit for the random velocity
            minVel: {
                x: -speedMagnitude,
                y: -speedMagnitude
            },
            // The upper limit for the random velocity
            maxVel: {
                x: speedMagnitude,
                y: speedMagnitude
            },

            // The source position
            position: {
                x: coords.x,
                y: coords.y
            }
        });
    });

    // Add a source at the bottom
    fireworks.addSource({
        gravity: 0.05,
        minVel: {
            x: -200,
            y: -400
        },
        maxVel: {
            x: 200,
            y: -1000
        },
        position: {
            x: window.innerWidth / 2,
            y: window.innerHeight
        }
    });
});

var getRandomNum = function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

var Particle = function Particle(config) {
    _classCallCheck(this, Particle);

    this.position = config.position || {
        x: 0,
        y: 0
    };
    this.velocity = config.velocity || {
        x: 0,
        y: 0
    };
    this.size = config.size == undefined ? 10 : config.size;

    this.opacity = config.opacity || 1;

    this.color = [];
};

var ParticleSource = function() {
    function ParticleSource(config) {
        _classCallCheck(this, ParticleSource);

        this._minVel = config.minVel;
        this._maxVel = config.maxVel;
        this._position = config.position;
        this.gravity = config.gravity || .1;

        this.particles = [];
    }

    ParticleSource.prototype.generateParticle = function generateParticle() {

        this.particles.push(new Particle({

            // Initial position of the particle
            position: Object.assign({}, this._position),

            // Initial velocity(Randomly generated)
            velocity: {

                x: getRandomNum(this._minVel.x, this._maxVel.x) / 100,

                y: getRandomNum(this._minVel.y, this._maxVel.y) / 100
            },

            // Random particle size
            size: getRandomNum(0, 200) / 100
        }));
    };

    return ParticleSource;
}();

var FireworksUniverseThingy = function() {
    function FireworksUniverseThingy($canvas, dimens) {
        _classCallCheck(this, FireworksUniverseThingy);

        this._$canvas = $canvas;
        this._dimens = dimens || {};

        this._sources = [];

        this._resizeHandler = this._resizeHandler.bind(this);
        this._calcLoop = this._calcLoop.bind(this);
        this._renderLoop = this._renderLoop.bind(this);

        this._init();
    }

    FireworksUniverseThingy.prototype._init = function _init() {

        // Window resize
        this._resizeHandler();
        window.addEventListener('resize', this._resizeHandler);

        this._ctx = this._$canvas.getContext('2d');
    };

    FireworksUniverseThingy.prototype._resizeHandler = function _resizeHandler() {

        this._$canvas.width = this._dimens.width = window.innerWidth;
        this._$canvas.height = this._dimens.height = window.innerHeight;
    };

    FireworksUniverseThingy.prototype.addSource = function addSource(config) {

        this._sources.push(new ParticleSource(Object.assign({
            dimens: this._dimens
        }, config)));
    };

    FireworksUniverseThingy.prototype.start = function start() {
        window.requestAnimationFrame(this._renderLoop);
        window.requestAnimationFrame(this._calcLoop);
    };

    // Update current state

    FireworksUniverseThingy.prototype._calcLoop = function _calcLoop() {

        this._sources.forEach(function(source) {

            for (var i = 0; i < 5; i++) {
                source.generateParticle();
            }
            source.particles.forEach(function(particle, i) {

                if (particle.opacity <= 0.1) source.particles.splice(i, 1);

                particle.position.x += particle.velocity.x;

                particle.position.y += particle.velocity.y;

                particle.velocity.y += source.gravity;

                particle.opacity -= 0.01;

                // particle.color[0]= getRandomNum(0, 255);
                particle.color[1] = getRandomNum(0, 255);
                particle.color[2] = getRandomNum(0, 255);
            });
        });

        window.requestAnimationFrame(this._renderLoop);
    };
    // Apply current state to canvas

    FireworksUniverseThingy.prototype._renderLoop = function _renderLoop() {
        var _this = this;

        this._ctx.clearRect(0, 0, this._dimens.width, this._dimens.height);

        this._sources.forEach(function(source) {

            source.particles.forEach(function(particle) {

                _this._ctx.beginPath();

                _this._ctx.arc(particle.position.x, particle.position.y, particle.size, 0, 2 * Math.PI);

                _this._ctx.fillStyle = 'rgba( 255, ' + particle.color[1] + ', ' + particle.color[2] + ', ' + particle.opacity + ')';

                _this._ctx.fill();
            });
        });

        window.requestAnimationFrame(this._calcLoop);
    };

    return FireworksUniverseThingy;
}();
