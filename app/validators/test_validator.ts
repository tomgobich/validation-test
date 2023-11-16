import vine from '@vinejs/vine'

export const testValidator = vine.compile(
  vine.object({
    test: vine.string().unique((query, field) => query.where('id', 1))
  })
)