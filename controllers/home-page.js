module.exports.index = function (req, res) {
  res.render('pages/index', {
    title: 'Main page'
  });
};


// module.exports.index = function (req, res) {
//   const sendObj = {
//     title: "Главная страница",
//     msg: req.query.msg
//   };

//   res.render('pages/index', object.assign({}, sendObj))
// };