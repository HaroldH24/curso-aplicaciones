const express = require('express');
const router = express.Router();

const connection = require('../../database');

const listaMentores = (req, res, next) => { 
    connection.query('SELECT * FROM mentor', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
}

const listaMentorPorId = (req, res, next) => { 
    const { id } = req.params;
    connection.query('SELECT * FROM mentor WHERE id_mentor = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
}

const agregaMentor = (req, res, next) => { 
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
}

const actualizaMentor = (req, res, next) => { 
    const { id } = req.params;
    connection.query('UPDATE mentor set ? WHERE id_mentor = ?', [req.body, id], (err, rows) => {
        if(!err){
            res.json('Mentor actualizado correctamente')
        }else{
            console.log(err)
            res.send('No se pudo actualizar los datos del mentor')
        }
    })
}

const eliminaMentor = (req, res, next) => { 
    const { id } = req.params;
    connection.query('DELETE FROM mentor WHERE id_mentor = ?', [id], (err, rows) => {
        if(!err){
            res.json('Mentor eliminado correctamente')
        }else{
            console.log(err)
            res.json('No se pudo eliminar el mentor')
        }
    })
}

module.exports = {
    listaMentores,
    listaMentorPorId,
    agregaMentor,
    actualizaMentor,
    eliminaMentor
};