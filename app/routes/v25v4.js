const { compile } = require("nunjucks");
const express = require('express')
const router = express.Router()

module.exports = function (router) {

  // Code supplied by Gary for dealing with query strings
  router.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // Code for the list screen

  router.get('/v24v2/health-form/task-list', (req, res, next) => {

    if (!req.session.sectionStatus){
      // console.log('no session');
      req.session.sectionStatus = {
        // cwyn: 'complete',
        aboutyourhealth: undefined,
        aboutyourhealthprofessionals: undefined,
        preparingfood: undefined,
        eatinganddrinking: undefined,
        managingtreatments: undefined,
        washingandbathing: undefined,
        managingtoiletneeds: undefined,
        dressingandundressing: undefined,
        talkingandlistening: undefined,
        reading: undefined,
        mixingwithotherpeople: undefined,
        managingmoney: undefined,
        planningandfollowingajourney: undefined,
        movingaround: undefined,
        additionalinformation: undefined,
        adjustmentsatanassessment: undefined,
        supportingevidence: undefined,
        clearstatus: undefined,
      }
    }

    if (!req.session.sectionCount){
      req.session.sectionCount = 0;
    }

    // aboutyourhealth
    if (req.query.aboutyourhealth == 'completed') {
      if (req.session.sectionStatus.aboutyourhealth != 'completed') {
        req.session.sectionCount = (req.session.sectionCount + 1);
      }
      req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
    };
    if (req.query.aboutyourhealth == 'inprogress') {
      req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
    };

    

    // if (req.query.supportingevidence) {
    //   if (req.session.sectionStatus.supportingevidence == undefined) {
    //     req.session.sectionCount = (req.session.sectionCount + 1)
    //   }
    //   req.session.sectionStatus.supportingevidence = req.query.supportingevidence
    // };

    // clearclaim
    if (req.query.clearstatus == 'completed') {
      req.session.sectionStatus.clearclaim = req.query.clearstatus
      req.session.sectionStatus.aboutyourhealth = req.query.aboutyourhealth
      req.session.sectionStatus.aboutyourhealthprofessionals = req.query.aboutyourhealthprofessionals
      req.session.sectionStatus.preparingfood = req.query.preparingfood
      req.session.sectionStatus.eatinganddrinking = req.query.eatinganddrinking
      req.session.sectionStatus.managingtreatments = req.query.managingtreatments
      req.session.sectionStatus.washingandbathing = req.query.washingandbathing
      req.session.sectionStatus.managingtoiletneeds = req.query.managingtoiletneeds
      req.session.sectionStatus.dressingandundressing = req.query.dressingandundressing
      req.session.sectionStatus.talkingandlistening = req.query.talkingandlistening
      req.session.sectionStatus.reading = req.query.reading
      req.session.sectionStatus.mixingwithotherpeople = req.query.mixingwithotherpeople
      req.session.sectionStatus.managingmoney = req.query.managingmoney
      req.session.sectionStatus.planningandfollowingajourney = req.query.planningandfollowingajourney
      req.session.sectionStatus.movingaround = req.query.movingaround
      req.session.sectionStatus.additionalinformation = req.query.additionalinformation
      req.session.sectionStatus.adjustmentsatanassessment = req.query.adjustmentsatanassessment
      if (!req.session.sectionCount){
        req.session.sectionCount = 0;
      }
    };



    res.render('v25v2/health-form/task-list.html', {sectionStatus: req.session.sectionStatus, sectionCount: req.session.sectionCount});
  });


// PIP ROUTING




// PIP2 HEALTH INFORMATION GATHER

// HEALTH CONDITION 1 //


router.post('/v25v4/health-form/about-your-health/health-condition-list-1', (req, res, next) => {
  res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-1');
});


// router.post('/v25v4/health-form/about-your-health/health-condition-details-1', (req, res, next) => {
//   res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-1');
// });

router.post('/v25v4/health-form/about-your-health/health-condition-cya-1', (req, res, next) => {
res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-final');
});



// HEALTH CONDITION 2 //

router.post('/v25v4/health-form/about-your-health/health-condition-list-2', (req, res, next) => {
  res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-2');
});


// router.post('/v25v4/health-form/about-your-health/health-condition-details-2', (req, res, next) => {
//   res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-2');
// });


router.post('/v25v4/health-form/about-your-health/health-condition-cya-2', (req, res, next) => {
res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-final');
});


// HEALTH CONDITION 3 //


router.post('/v25v4/health-form/about-your-health/health-condition-list-3', (req, res, next) => {
  res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-3');
});


// router.post('/v25v4/health-form/about-your-health/health-condition-details-3', (req, res, next) => {
//   res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-3');
// });


router.post('/v25v4/health-form/about-your-health/health-condition-cya-3', (req, res, next) => {
res.redirect('/v25v4/health-form/about-your-health/health-condition-cya-final');
});


}
