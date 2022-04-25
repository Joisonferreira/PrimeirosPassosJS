function getAdmins(map) {
  let Admins = []
  for ([key, value] of map) {
    if (value == 'Admin') {
      Admins.push(key)
    }
  }
  return Admins
}

const usuarios = new Map()

usuarios.set('Luis', 'Admin')
usuarios.set('Stephany', 'Admin')
usuarios.set('João', 'User')
usuarios.set('Maria', 'Admin')

console.log(getAdmins(usuarios))
