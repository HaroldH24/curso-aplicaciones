const express = require('express');
const router = express.Router();

const connection = require('../../database');

router.get('/mentorizados', (req, res) => {
    connection.query('SELECT * FROM mentorizado', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/mentorizados/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM mentorizado WHERE id_mentorizado = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/mentorizados', (req,res) => {
    const body = req.body;
    connection.query('INSERT INTO mentorizado set ?', [body], (err, rows) => {
        if(!err){
            res.json('Mentorizado guardado correctamente')
        }else{
            console.log(body)
            console.log(err)
            res.send('No se pudo guardar el mentorizado')
        }
    })
})

router.put('/mentorizados/:id', (req,res) => {
    const { id } = req.params;
    connection.query('UPDATE mentorizado set ? WHERE id_mentor = ?', [req.body, id], (err, rows) => {
        if(!err){
            res.json('Mentorizado actualizado correctamente')
        }else{
            console.log(err)
            res.send('No se pudo actualizar los datos del mentorizado')
        }
    })
})

router.delete('/mentorizados/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM mentorizado WHERE id_mentor = ?', [id], (err, rows) => {
        if(!err){
            res.json('Mentorizado eliminado correctamente')
        }else{
            console.log(err)
            res.json('No se pudo eliminar el mentorizado')
        }
    })
})


module.exports = router;