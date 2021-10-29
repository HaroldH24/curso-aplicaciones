const express = require('express');
const router = express.Router();

const connection = require('../../database');

//Lista de mentores
router.get('/mentores', (req, res) => {
    connection.query('SELECT * FROM mentor', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

//Mentor seleccionado por id
router.get('/mentores/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM mentor WHERE id_mentor = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

//Agrega un nuevo mentor
router.post('/mentores', (req,res) => {
    const body = req.body;
    connection.query('INSERT INTO mentor set ?', [body], (err, rows) => {
        if(!err){
            res.json('Mentor guardado correctamente')
        }else{
            console.log(body)
            console.log(err)
            res.send('No se pudo guardar el mentor')
        }
    })
})

//Actualiza un mentor por  id
router.put('/mentores/:id', (req,res) => {
    const { id } = req.params;
    connection.query('UPDATE mentor set ? WHERE id_mentor = ?', [req.body, id], (err, rows) => {
        if(!err){
            res.json('Mentor actualizado correctamente')
        }else{
            console.log(err)
            res.send('No se pudo actualizar los datos del mentor')
        }
    })
})

//Elimina un mentor por id
router.delete('/mentores/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM mentor WHERE id_mentor = ?', [id], (err, rows) => {
        if(!err){
            res.json('Mentor eliminado correctamente')
        }else{
            console.log(err)
            res.json('No se pudo eliminar el mentor')
        }
    })
})


module.exports = router;