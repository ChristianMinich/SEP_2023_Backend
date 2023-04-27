const express = require('express');

/**
 * 
 */
class Singleton {
    constructor() {
        throw new Error('Use Singleton.getInstance()');
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new express();
        }
        return Singleton.instance;
    }
}
module.exports = Singleton;