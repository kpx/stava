class Obfuscation {
    random: Random;
    currentSeed: number;
    constructor(seed?: number){
        if (!seed){
            this.currentSeed = this.getNewSeed();
        } else {
            this.currentSeed = seed;
        }
        this.random = new Random(this.currentSeed);
        
    }
    private getNewSeed = (): number => {
        return new Date().setUTCHours(0, 0, 0, 0).valueOf();
    }

    public getSeed = (): number => {
        return this.currentSeed;
    }
    public getNextIndex = (): number => {
        return this.random.next();
    }

}

class Random{
    seed: number;

    constructor(seed: number){
        this.seed = seed;
    }

    next = (): number => {
        var x = Math.sin(this.seed++) * 10000;
        return Math.floor((x - Math.floor(x)) * 100000);
    }
}

export default Obfuscation;