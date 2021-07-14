/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { gentEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { isDate } = require('../helpers/isDate');
const router = Router();

router.use( validarJWT );

// Obtener eventos
router.get( '/', gentEventos );

//Crear un evento
router.post(
    '/',
    [
        check( 'title', 'El titulo es obligatorio' ).not().isEmpty(),
        check( 'start', 'Fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'Fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ],
    crearEvento
);

//Actualizar evento
router.put(
    '/:id',
    [
        check( 'title', 'El titulo es obligatorio' ).not().isEmpty(),
        check( 'start', 'Fecha de inicio es obligatoria' ).custom( isDate ),
        check( 'end', 'Fecha de finalizacion es obligatoria' ).custom( isDate ),
        validarCampos
    ],
    actualizarEvento
);

//Borrar evento
router.delete( '/:id', eliminarEvento );

module.exports = router;