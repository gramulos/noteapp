import assert from 'assert'

const Note = {
  create: function (args) {
    return Object.create(Note).init(args)
  },
  init: function (args) {
    args = args || {}
    assert.ok(args.text, 'Note must have a text')
    assert.ok(args.color, 'Note must have a color')

    this.text = args.text
    this.color = args.color
    return this
  }
}

export default Note
