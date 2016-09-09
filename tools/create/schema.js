const schema = [
  {
    name: 'type',
    description: "\r\n What to create? (type of the file) \r\n 1.Component  \r\n 2.Page(not implemented yet) \r\n 3.Theme(not implemented yet) \r\n",
    required: true,
    type: 'integer'
  },
  {
    name: 'name',
    description: '\r\n Enter a folder name',
    required: true,
    type: 'string'
  },
  {
    name: 'css',
    description: '\r\n Enter a css class name',
    required: true,
    type: 'string'
  },
  {
    name: 'class',
    description: '\r\n Enter a Class',
    required: true,
    type: 'string'
  },
]

module.exports = schema;