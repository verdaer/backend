var express = require('express');
var router = express.Router();
// Dizin adı `controller` şeklinde (tekil). Doğru path ve değişken isimleri kullanılıyor.
var venueController = require('../controller/venueController');
var commentController = require('../controller/commentController');

router
.route("/venues")
.get(venueController.listVenues) // rest API: tüm mekanları listele
.post(venueController.addVenue);

router
.route("/venues/:venueid")
.get(venueController.getVenue)
.put(venueController.updateVenue)
.delete(venueController.deleteVenue);

router
.route("/venues/:venueid/comments")
.post(commentController.addComment);

router
.route("/venues/:venueid/comments/:commentid")
.get(commentController.getComment)
.put(commentController.updateComment)
.delete(commentController.deleteComment);

module.exports=router;