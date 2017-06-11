var express = require('express');
var router = express.Router();

router.get('/jsSmallChange', function(req, res, next) {
  res.render('./mrh/jsSmallChange/index', {
    title: 'jsSmallChange'
  });
});

router.get('/returnTop', function(req, res, next) {
  res.render('./mrh/returnTop/index', {
    title: 'returnTop'
  });
});

router.get('/tab0', function(req, res, next) {
  res.render('./mrh/tab0/index', {
    title: 'tab0'
  });
});

router.get('/accordion', function(req, res, next) {
  res.render('./mrh/accordion/index', {
    title: 'accordion'
  });
});

router.get('/monthJudge', function(req, res, next) {
  res.render('./mrh/monthJudge/index', {
    title: 'monthJudge'
  });
});

router.get('/randomPlage', function(req, res, next) {
  res.render('./mrh/randomPlage/index', {
    title: 'randomPlage'
  });
});

router.get('/calendar', function(req, res, next) {
  res.render('./mrh/calendar/index', {
    title: 'calendar'
  });
});

router.get('/countDown', function(req, res, next) {
  res.render('./mrh/countDown/index', {
    title: 'countDown'
  });
});

router.get('/boxMove', function(req, res, next) {
  res.render('./mrh/boxMove/index', {
    title: 'boxMove'
  });
});

router.get('/pictureCarousel', function(req, res, next) {
  res.render('./mrh/pictureCarousel/index', {
    title: 'pictureCarousel'
  });
});

module.exports = router;
