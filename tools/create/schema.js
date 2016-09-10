const schemas = {
  type: {
    name: 'type',
    description: "\r\nType of the file \r\n 1.Component\r\n 2.Page\r\n 3.Theme(not implemented yet)\r\n",
    required: true,
    type: 'integer'
  },
  component: [
    {
      name: 'name',
      description: '\r\nComponent name',
      required: true,
      type: 'string'
    },
    {
      name: 'css',
      description: '\r\nCss class',
      required: true,
      type: 'string'
    },
    {
      name: 'class',
      description: '\r\nClass',
      required: true,
      type: 'string'
    }
  ],
  page: [
    {
      name: 'name',
      description: '\r\nPage name (without spaces)',
      required: true,
      type: 'string'
    },
    {
      name: 'path',
      description: '\r\nRoute(path)',
      required: true,
      type: 'string'
    },
    {
      name: 'class',
      description: '\r\nClass',
      required: true,
      type: 'string'
    },
    {
      name: 'header',
      description: '\r\nInclude link in header?',
      required: true,
      type: 'boolean'
    },
    {
      name: 'sidebar',
      description: '\r\nInclude link in sidebar?',
      required: true,
      type: 'boolean'
    },
  ]
}

module.exports = schemas;