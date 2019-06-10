const express = require("express");
const router = express.Router();

const Images = require("../model/Images");

//get images

router.get("/images", (req, res) => {
    Images.findAll()
    .then(images => {
        res.json(images)
    }).catch(err => {
        res.send("errror: " + err)
    })
});

//add image
// router.post("/image", (req,res) => {
//     if(!req.body.title && !req.body.description && !req.body.image_url){
//         res.status(400);
//         res.json({
//             error: "All fields are reqired!"
//         })
//     }else{
//         Images.create(req.body)
//         .then(() => {
//             res.send("Image Added")
//         }).catch(err => {
//             res.send("Error: " + err)
//         });
//     }
// });

module.exports = router;