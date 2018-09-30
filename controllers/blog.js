module.exports.blog = function (req, res) {
  res.render('pages/blog', {
    title: 'My blog'
  });
};

// module.exports.blog = function (req, res) {
//   const sendObj = {
//     title: "My blog"
//   };
//   //сюда вставить массив статей блога
//   const items = [];

//   res.render('pages/blog', object.assign({}, sendObj, {items}))
// };