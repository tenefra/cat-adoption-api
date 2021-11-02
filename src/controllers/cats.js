const findAllCats = (req, res) => {
  res.json(cats)
}

const findOneCat = (req, res) => {
  const { id } = req.params

  const foundCat = Cats.find(cat => cat.id === Number(id))
  res.json(foundCat)
}

const createCat = (req, res) => {
  const cat = req.body
  cats.push(cat)
  res.json(cats)
}

module.exports = {
  findAllCats,
  findOneCat,
  createCat
}
