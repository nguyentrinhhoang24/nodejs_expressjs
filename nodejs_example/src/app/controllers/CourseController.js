const Course = require("../models/Course");
//const { mutipleMongooseToObject } = require('../../util/mongoose');
class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course)=>{
        res.json('courses/show', {course});
      })
      .catch(next);
  }

  create(req, res, next) {
    res.render('courses/create');
  }
}
module.exports = new CourseController();