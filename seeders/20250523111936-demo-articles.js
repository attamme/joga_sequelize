'use strict';

const { create } = require('domain');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return Promise.all([
      queryInterface.bulkInsert('Articles', [{
        name: 'Introduction to Ashtanga',
        slug: 'introduction-to-ashtanga',
        image: 'ashtanga.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>\r\n\r\n<p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p>\r\n\r\n<p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquam, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>\r\n\r\n<p>Curabitur odio odio, tincidunt a ultrices nec, dignissim quis diam. Nulla at nunc et nibh sodales ultrices vitae vitae purus. Ut blandit suscipit magna at commodo. Suspendisse egestas eros nisl, condimentum lobortis elit blandit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor nibh, at consectetur erat. Aliquam tincidunt quam eu sapien molestie, at sollicitudin ex consequat. Morbi laoreet diam quis nibh condimentum auctor. Ut in nibh sem. Etiam euismod nibh ac nulla bibendum condimentum. Suspendisse potenti.</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id aliquet orci. Fusce posuere non nisl a maximus. Ut vehicula arcu mauris. In tincidunt, metus ut faucibus efficitur, leo odio condimentum diam, ac consectetur nisl arcu a odio. Pellentesque bibendum ut mi ac sodales. Nulla rhoncus ullamcorper enim. Vivamus in arcu ac ligula laoreet mollis. Maecenas maximus pharetra nisl, id convallis mi. Fusce sodales lorem a eros tristique, aliquet dignissim velit consequat.</p>\r\n\r\n<p>Mauris fringilla placerat orci, non congue tortor viverra id. Vivamus rhoncus elit eu purus tincidunt molestie. Nulla ut accumsan risus. Ut fermentum eu orci eget semper. Praesent ac dolor elementum, tempor felis a, gravida nisl.</p>\r\n\r\n<p>Suspendisse congue mi sit amet turpis placerat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta libero orci, sed facilisis libero lobortis vel. Donec vel metus lacus. Duis venenatis interdum dui, vitae maximus erat laoreet id. Sed ac consectetur urna. Donec at nisl aliquam, euismod diam nec, blandit felis.</p>',
        published: '2020-01-08 15:02:30',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Morning vinyasa flow routine',
        slug: 'morning-vinyasa-flow-routine',
        image: 'morning.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>\r\n\r\n<p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p>\r\n\r\n<p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquam, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>\r\n\r\n<p>Curabitur odio odio, tincidunt a ultrices nec, dignissim quis diam. Nulla at nunc et nibh sodales ultrices vitae vitae purus. Ut blandit suscipit magna at commodo. Suspendisse egestas eros nisl, condimentum lobortis elit blandit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor nibh, at consectetur erat. Aliquam tincidunt quam eu sapien molestie, at sollicitudin ex consequat. Morbi laoreet diam quis nibh condimentum auctor. Ut in nibh sem. Etiam euismod nibh ac nulla bibendum condimentum. Suspendisse potenti.</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id aliquet orci. Fusce posuere non nisl a maximus. Ut vehicula arcu mauris. In tincidunt, metus ut faucibus efficitur, leo odio condimentum diam, ac consectetur nisl arcu a odio. Pellentesque bibendum ut mi ac sodales. Nulla rhoncus ullamcorper enim. Vivamus in arcu ac ligula laoreet mollis. Maecenas maximus pharetra nisl, id convallis mi. Fusce sodales lorem a eros tristique, aliquet dignissim velit consequat.</p>\r\n\r\n<p>Mauris fringilla placerat orci, non congue tortor viverra id. Vivamus rhoncus elit eu purus tincidunt molestie. Nulla ut accumsan risus. Ut fermentum eu orci eget semper. Praesent ac dolor elementum, tempor felis a, gravida nisl.</p>\r\n\r\n<p>Suspendisse congue mi sit amet turpis placerat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta libero orci, sed facilisis libero lobortis vel. Donec vel metus lacus. Duis venenatis interdum dui, vitae maximus erat laoreet id. Sed ac consectetur urna. Donec at nisl aliquam, euismod diam nec, blandit felis.</p>',
        published: '2020-04-14 15:02:41',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Articles', [{
        name: 'Secrets of a yoga teacher',
        slug: 'secrets-of-a-yoga-teacher',
        image: 'yoga-teacher.jpg',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna leo, vulputate eget porttitor quis, maximus id lectus. Donec pulvinar est quis sagittis tincidunt. Curabitur sed enim ligula. Mauris lacinia scelerisque magna, dapibus pretium orci commodo vitae. Quisque in diam dui. Aenean nibh nisl, tristique sed sem non, convallis elementum sem.</p>\r\n\r\n<p>Vestibulum aliquam libero libero, non facilisis eros rhoncus et. Duis viverra et sem at mollis. Morbi gravida aliquam libero, at feugiat nulla rutrum ac. Aliquam iaculis diam sit amet nisl auctor tempus. Nunc posuere libero nec lacus posuere, non commodo est molestie. Suspendisse et aliquam ligula. Donec porta suscipit egestas. Curabitur et turpis consequat, finibus lacus id, posuere quam.</p>\r\n\r\n<p>Aliquam erat volutpat. Nunc vulputate tellus augue, a condimentum arcu semper in. Ut scelerisque urna nec massa venenatis, eu dapibus nibh ultricies. Donec aliquam, nibh ac lobortis porttitor, urna purus porttitor ante, sed pharetra ligula nibh sit amet tortor. Integer nec semper felis, et feugiat leo. Morbi ornare maximus dignissim. Donec eu urna vel mi dapibus fermentum et ut dolor. Aenean non ipsum nec risus gravida scelerisque non in nibh. Donec placerat mauris at ante ultrices eleifend.</p>\r\n\r\n<p>Curabitur odio odio, tincidunt a ultrices nec, dignissim quis diam. Nulla at nunc et nibh sodales ultrices vitae vitae purus. Ut blandit suscipit magna at commodo. Suspendisse egestas eros nisl, condimentum lobortis elit blandit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor nibh, at consectetur erat. Aliquam tincidunt quam eu sapien molestie, at sollicitudin ex consequat. Morbi laoreet diam quis nibh condimentum auctor. Ut in nibh sem. Etiam euismod nibh ac nulla bibendum condimentum. Suspendisse potenti.</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id aliquet orci. Fusce posuere non nisl a maximus. Ut vehicula arcu mauris. In tincidunt, metus ut faucibus efficitur, leo odio condimentum diam, ac consectetur nisl arcu a odio. Pellentesque bibendum ut mi ac sodales. Nulla rhoncus ullamcorper enim. Vivamus in arcu ac ligula laoreet mollis. Maecenas maximus pharetra nisl, id convallis mi. Fusce sodales lorem a eros tristique, aliquet dignissim velit consequat.</p>\r\n\r\n<p>Mauris fringilla placerat orci, non congue tortor viverra id. Vivamus rhoncus elit eu purus tincidunt molestie. Nulla ut accumsan risus. Ut fermentum eu orci eget semper. Praesent ac dolor elementum, tempor felis a, gravida nisl.</p>\r\n\r\n<p>Suspendisse congue mi sit amet turpis placerat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta libero orci, sed facilisis libero lobortis vel. Donec vel metus lacus. Duis venenatis interdum dui, vitae maximus erat laoreet id. Sed ac consectetur urna. Donec at nisl aliquam, euismod diam nec, blandit felis.</p>',
        published: '2060-05-28 15:02:55',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Articles', null, {})
  }
};
