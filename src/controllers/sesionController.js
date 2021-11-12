const express = require('express');
const router = express.Router();

const connection = require('../../database');

const listaSesion = (req, res, next) => { 
    connection.query('SELECT * FROM sesion', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
}

const listaSesionPorId = (req, res, next) => { 
    const { id } = req.params;
    connection.query('SELECT * FROM sesion WHERE id_sesion = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
}

const agregaSesion = (req, res, next) => { 
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
}

const actualizaSesion = (req, res, next) => { 
    const { id } = req.params;
    connection.query('UPDATE sesion set ? WHERE id_sesion = ?', [req.body, id], (err, rows) => {
        if(!err){
            res.json('Sesion actualizado correctamente')
        }else{
            console.log(err)
            res.send('No se pudo actualizar los datos de la sesion')
        }
    })
}

const eliminaSesion = (req, res, next) => { 
    const { id } = req.params;
    connection.query('DELETE FROM sesion WHERE id_sesion = ?', [id], (err, rows) => {
        if(!err){
            res.json('Sesion eliminada correctamente')
        }else{
            console.log(err)
            res.json('No se pudo eliminar la sesion')
        }
    })
}

module.exports = {
    listaSesion,
    listaSesionPorId,
    agregaSesion,
    actualizaSesion,
    eliminaSesion
};