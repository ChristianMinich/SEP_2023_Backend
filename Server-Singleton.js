const express = require('express');

/**
 * Design Pattern Singleton enusures that there can only be one Instance of the Express Class
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