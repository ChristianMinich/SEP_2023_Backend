const database = require('./Connection');
import Database from './Connection'
class Singleton {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Database();
        }
        return Singleton.instance;
    }
}
module.exports = Singleton;