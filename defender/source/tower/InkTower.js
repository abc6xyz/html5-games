/**
 * The Ink Tower Class
 * @extends {Tower}
 */
class InkTower extends Tower {

    /**
     * The Ink Tower constructor
     * @param {Number} id
     * @param {Number} row
     * @param {Number} col
     * @param {Number} boardSize
     */
    constructor(id, row, col, boardSize) {
        super();

        this.type      = "Ink";
        this.name      = "Ink Tower";
        this.special   = "Ink-Bolt Tower";
        this.text      = "Deals damage over time. Ground only";
        this.levels    = 6;
        this.size      = 2;
        this.sound     = "ink";
        this.bleeds    = true;

        this.costs     = [ 60, 105, 150, 195, 240, 480 ];
        this.damages   = [ 12,  24,  36,  48,  60, 120 ];
        this.ranges    = [ 60,  60,  60,  60,  60,  60 ];
        this.speeds    = [  6,   6,   6,   6,   6,  12 ];
        this.ammoRange = 20;

        this.init(id, row, col, boardSize);
    }

    /**
     * Creates a new Ammo
     * @param {Array.<Mob>} targets
     * @returns {InkAmmo}
     */
    createAmmo(targets) {
        return new InkAmmo(this, targets, this.boardSize);
    }


    /**
     * Returns a list of Mobs close to the given one
     * @param {List.<Iterator>} mobs
     * @param {Mob}             mob
     * @returns {Array.<Array.<Mob>>}
     */
    getTargets(mobs, mob) {
        return [ this.getCloseTargets(mobs, mob) ];
    }
}
