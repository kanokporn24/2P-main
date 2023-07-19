const sql = require("./db");
//constructor
const Restaurant = funtion(restaurant); {
    //Atrributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.imageurl = restaurant.imageurl;

};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurant SET name, type,image VALUES ("KFC", "Fastfood", "url")
    sql.query("INSERT INTO restaurant SET  ? ", newRestaurant, (err, res) => {
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มีerror
        console.log("new retaurant creatad");
        result(null, { id: res.id, ...newRestaurant });
    });
};


Restaurant.gettById = (restaurant, result) => {
    //SELECT * From restaurant WHERE id = restaurantId
    sql.query
    'SELECT * From restaurant WHERE id = ${restaurantId}',
        (err, res) => {
            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }
            console.log("err", err);
            if (res.length) {
                result(err, null);
                return;
            }
            result({ kind: "not_found" }, null);


        }
}


//อัปเดต
//Update Restaurant

Restaurant.updateById = ( restaurant, result) => {
    //UPDATE restaurants SET name="name", type="type", imageurl"imageurl" WHERE id="id"
    sql.query("DELETE FROM re WHERE id = ${restaurant}",
        (err, res) => {

            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }

            console.log("delete restaurant by Id");

            if (res.affectedRows === 1) {
                result(null, { message: "Restaurant deleted successfully." });
            } else {

                result({ kind: "not_found" }, null);
            }
        }
    );
};

Restaurant.updateById = (restaurant, result) => {
    //UPDATE re SET nam = "name", type="type", img = "img" WHERE id = "id"
    console.log ("reId",reId,"result",result)
    sql.query(" UPDATE re SET name = ?, type=?, img = ?,  WHERE id =? ",
        [result.name, result.type, result.img, reId],
        (err, res) => {
            if (err) {
                // console.log(res);
                // result(err, null)
                return 0 ;
            }
            if (res.affectedRows === 0) {
                // result({ kind: "not_found" }, null)
                // result;
                return 0;
            }
            result(null, { id: id, ...res });
        }
    );
};







//module.exports = Restaurant.js;