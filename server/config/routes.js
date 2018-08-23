
let path   = require("path");
var ProductController=require('../controllers/products');

module.exports= function(app){
app.get('/api/products', ProductController.findAll);
app.post('/api/products', ProductController.addProduct);
app.get('/api/products/:id', ProductController.findOne);
app.patch('/api/products/:id', ProductController.update);
app.delete('/api/products/:id', ProductController.deleteOne);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}