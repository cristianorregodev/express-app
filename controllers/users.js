const { response, request } = require('express')

const usersGet = (req = request, res = response) => {
  const query = req.query

  res.json({
    msg: 'get API - controlador',
    query,
  })
}

const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body

  res.json({
    msg: 'post API - usuariosPost',
    nombre,
    edad,
  })
}

const usersPut = (req, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'put API - usuariosPut',
    id,
  })
}

const usersPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - usuariosPatch',
  })
}

const usersDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - usuariosDelete',
  })
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
}
