const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/api/companies', (req, res) => {
    var companyList = [];
    db.execute('select * from company').then(
      result => {
        var companies = result[0];
        for(var key in companies){
          var obj = companies[key];
          for(var keys in obj){
            if(keys === "name"){
              console.log("Pushing :"+obj[keys]);
              companyList.push(obj[keys]);
            }
          }
        }
        res.send({ companyList: companyList });
  
      }).catch((e) => {
        console.log("Error "+e);
        res.send({ companyList: companyList });
    });
  });

module.exports = router;