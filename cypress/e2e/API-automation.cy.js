
describe('Pruebas funcionales de automatizacion en API', function () {

  it('Crear un usuario', function () {
    cy.log(`Iniciando creacion de usuario...`)
    cy.crearUsuario()
    cy.log(`Usuario creado.`)
  })
  
  it('Buscar el usuario creado', function () {
    cy.log(`Buscando usuario creado...`)
    cy.obtenerUsuarioCreado()
    cy.log(`Usuario creado ha sido encontrado.`)
  })
  
  it('Actualizar nombre y correo del usuario', function () {
    cy.log(`Iniciando actualizacion de usuario...`)
    cy.actualizarUsuario()
    cy.log(`El usuario ha sido actualizado...`)
  })
  
  it('Buscar el usuario actualizado', function () {
    cy.log(`Buscando usuario actualizado...`)
    cy.obtenerUsuarioActualizado()
    cy.log(`Usuario actualizado ha sido encontrado.`)
  })
  
  
  it('Eliminar el usuario', function () {
    cy.log(`Eliminando usuario actualizado...`)
    cy.eliminarUsuarioActualizado()
    cy.log(`Usuario actualizado ha sido eliminado.`)
  })

})