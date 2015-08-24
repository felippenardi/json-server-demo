'use strict';

module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        users: _.times(50, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                bios: faker.company.catchPhrase()
            }
        })
    }
}
