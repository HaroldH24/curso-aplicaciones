const express = require('express');
const router = express.Router();

const connection = require('../../database');

router.get('/sesiones', (req, res) => {
    connection.query('SELECT * FROM sesion', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/sesiones/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM sesion WHERE id_sesion = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/sesiones', (req,res) => {
    const body = req.body;
    connection.query('INSERT INTO sesion set ?', [body], (err, rows) => {
        if(!err){
            res.json('Sesion guardada correctamente')
        }else{
            console.log(body)
            console.log(err)
            res.send('No se pudo guardar la sesion')
        }
    })
})

router.put('/sesiones/:id', (req,res) => {
    const { id } = req.params;
    connection.query('UPDATE sesion set ? WHERE id_mentor = ?', [req.body, id], (err, rows) => {
        if(!err){
            res.json('Sesion actualizado correctamente')
        }else{
            console.log(err)
            res.send('No se pudo actualizar los datos de la sesion')
        }
    })
})

router.delete('/sesiones/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM mentor WHERE id_mentor = ?', [id], (err, rows) => {
        if(!err){
            res.json('Sesion eliminada correctamente')
        }else{
            console.log(err)
            res.json('No se pudo eliminar la sesion')
        }
    })
})

module.exports = router;