class RandomizedSet {
    randomSet: Set<number>;
    constructor() {
        this.randomSet = new Set();
    }

    insert(val: number): boolean {
        if (!this.randomSet.has(val)) {
            this.randomSet.add(val);
            return true;
        }
        return false;
    }

    remove(val: number): boolean {
        if (!this.randomSet.has(val)) {
            return false;
        }
        this.randomSet.delete(val);
        return true;
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.randomSet.size);

        return [...this.randomSet][index];
    }
}

export { RandomizedSet };

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
