const express = require('express')

const router = express.Router()

  //1. Seleccionar todos los courses 
  router.get(('/'), 
  (request , response) => {
      return response.json({
          success: true,
          msg: "seleccionando todos los courses"
      })
  })
  
  
  router.get('/:id' , 
          (request , response) => {
              coursesId= request.params.id
              return response.json(
  
              {
                  success : true,
                  msg: `Seleccionando courses cuyo ID es ${coursesId}`
              }
              
              )
          })
  
          //3. Crear courses con post
  
          router.post(('/'), 
      (request , response) => {
          return response.json({
              success: true,
              msg: "Crear courses"
          })
      })
  
  
      //4. Actualizar courses con ID metodo put 
  
      router.put('/:id' , 
          (request , response) => {
              coursesId= request.params.id
              return response.json(
  
              {
                  success : true,
                  msg: `Actualizando courses cuyo ID es ${coursesId}`
              }
              
              )
          })
  
  
          //5. Eliminar courses con ID 
  
          router.delete('/:id' , 
          (request , response) => {
              coursesId= request.params.id
              return response.json(
  
              {
                  success : true,
                  msg: `Eliminando courses cuyo ID es ${coursesId}`
              }
              
              )
          })
  
    module.exports = router