class Environment {
    // Creates and environment with the given record
    // or an new empty one as default
    constructor(record = {}, parent = null) {
        this.record = record;
        this.parent = parent;
    }

    // Creates a varuable with the given name and value
    define(name, value) {
        this.record[name] = value; 
        return value;
    }

    // Updates an existing variable
    assign(name, value) {
        this.resolve(name).record[name] = value;
        return value;
    }

    // Returns the value of a defined variable, or throws
    // if the variable is not defined
    lookup(name) {
        return this.resolve(name).record[name];
    }

    // Identifier resolution
    // Returns specific environment in which a variable is defined,
    // or throws if a variable is not defined
    resolve(name) {
        if (this.record.hasOwnProperty(name)) {
            return this;
        }

        if (this.parent == null) {
            throw new ReferenceError(`Variable "${name}" is not defined`);
        }

        return this.parent.resolve(name);
    }
}

module.exports = Environment;
