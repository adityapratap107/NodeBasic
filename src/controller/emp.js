const Emp = require('../models/emp');

const create = (req,res,next) => {
    let empName = req.body.empName;
    let empEmail = req.body.empEmail;
    let empMobile = req.body.empMobile;

    let emp = new Emp({
        empName,
        empEmail,
        empMobile
      })
    
      emp.save().then((data) => {
        res.send(data);
      })
};

const view = (req,res,next) => {
  console.log('View called')
  Emp.find({}).then((data) => {
    res.send(data);
  })
}
module.exports = {view, create};