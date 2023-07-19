const express = require("exprss");
const router = expess.Router();
const restaurant = require("../models/restaurant.model");

router.post("/restaurant", (req, res) => {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        img: req.body.img
    })

    Restaurant.create(newRestaurant, (err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occured while inserting the new resttaurant"
            });
        } else {
            res.send(data);
        }
    })
});

router.get("/restaurant", (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Some error occured while inserting the new restaurant"
            });
        } else {
            res.send(data);
        }
    })
});

router.get("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id);
    Restaurant.getById(restaurantId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: "Restaurant"
                })
            }
        }
    })
});


router.put("/restaurant/:id", (req, res) =>{
    const restaurantId = Number.parseInt(req.params.id);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Attributes can not be empty!"
        })
    }
    // UPDATE `re` SET `name` = 'ตี๋เปิ้ลก่วยเตี๋ยวต้มยำสุโขทัย - สวนมะลิ', `type` = 'ก่วยเตี๋ยวต้มยำสุโขทัย', `img` = '' WHERE `re`.`id` = 5;
    conSql.query(" UPDATE re SET name = ?, type=?, img = ?  WHERE re.id = ? "),
        [req.body.name, req.body.type, req.body.img, restaurantId],
        (err, result) => {
            if (err) {
                // console.log(res);
                // result(err, null)
                res.status(400).json({ message: err.stack})
            }
            if (result.affectedRows === 0) {
                // result({ kind: "not_found" }, null)
                // result;
                res.status(400).json({ message: 'not found id ' + restaurantId })

            }
            res.status(200).json({message:result.message})
        }
});
























//module.exports = router;