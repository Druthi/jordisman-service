const db = require('../database/index.js');
const mockData = require('../mock_data.js');


const insertData = function (data) {
  data.forEach(function (item) {
    let { id, review, rating, created_at, product_id } = item;
    let queryStr = `INSERT INTO reviews (id, review, rating, created_at, product_id) VALUES (${id}, '${review}', ${rating}, '${created_at}', ${product_id})`;

    db.connection.query(queryStr, (err, results) => {
      if (err) {
        console.log('failed to seed db', err);
      } else {
        console.log('data seeded to db', results[0]);
      }
    });
  });
}
// console.log(mockData.mockData);
insertData(mockData.mockData);