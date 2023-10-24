//reviews 

const express = require('express')

const router = express.Router()

router.get(('/'), 
(request , response) => {
    return response.json({
        success: true,
        msg: "seleccionando todos los reviews"
    })
})

router.get('/:id' , 
        (request , response) => {
            reviewsId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Seleccionando reviews cuyo ID es ${reviewsId}`
            }
            
            )
        })

        //3. Crear reviews con post

        router.post(('/'), 
    (request , response) => {
        return response.json({
            success: true,
            msg: "Crear reviews"
        })
    })


    //4. Actualizar reviews con ID metodo put 

    router.put('/:id' , 
        (request , response) => {
            reviewsId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Actualizando reviews cuyo ID es ${reviewsId}`
            }
            
            )
        })


        //5. Eliminar users con ID 

        router.delete('/:id' , 
        (request , response) => {
            reviewsId= request.params.id
            return response.json(

            {
                success : true,
                msg: `Eliminando reviews cuyo ID es ${reviewsId}`
            }
            
            )
        })

module.exports = router