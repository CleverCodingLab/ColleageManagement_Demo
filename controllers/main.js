
module.exports.controller = function (app) {
    app.get('/main/profile',function (req, res) {
        res.send("this is profile page");
    });
    app.get('/about-us',function (req, res) {
        res.send("this is about page");
    });
    app.get('/contact-us',function (req, res) {
        res.send("this is contact page");
    });
};



//module.exports.controller = function (req, res) {
//    res
//        .status(200)
//        .send("this is home page from controller");

//};
