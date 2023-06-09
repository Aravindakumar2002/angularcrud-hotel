const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aravind@72',
    database: 'hoteldb',
});


// get all food with all specificed fields and isactive = 1 and return result as json
app.get('/getfood', (req, res) => {
    db.query('SELECT Id,Food,Price FROM hotel where isDeleted=1', (err, result) => {
        console.log('88888888888888888',result)
        if (err) {
            console.log(err);
        } else {

            console.log('dddddddd',result);
            res.json(result);
        }
    });
}   
);


//insert food items into database
app.post('/addfood', (req, res) => {
    console.log("Attt",req.body);
    db.query('INSERT INTO hotel (Food,Price,isDeleted) VALUES (?,?,1);',[req.body.food, req.body.price], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json({
                    message: "Values Inserted",
                    data: result
                });
            }
        }
    );
});


// get foodbyid
app.get('/getfood/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query('SELECT Id,Food,Price FROM hotel WHERE Id = ?', id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



//update food items into database
app.put('/updatefood', (req, res) => {
    console.log("inside update server" );
    const id = req.body.id;
    const foodname = req.body.food;
    const price = req.body.price;
    db.query('UPDATE hotel SET Food = ?, Price = ? WHERE Id = ?',
        [foodname, price, id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
                
            }
        }
    );
});


// delete food items from database
app.put('/deletefood', (req, res) => {
    // const id = req.params.id;
    db.query('UPDATE hotel SET isDeleted=? WHERE Id = ?',[0,req.body.id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});



//listen port 3000
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
}
);


