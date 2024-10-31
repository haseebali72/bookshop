const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error.controller');
const sequelize = require("./util/database") 

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin.route');
const shopRoutes = require('./routes/shop.route');

// db.execute('SELECT * FROM products')
//   .then(result => console.log(result[0][0].title))
//   .catch(err => err)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then(result=> console.log(1)).catch(err=> console.log(err))

app.listen(3000, ()=>{
  console.log(`Server live at 3000`)
});
