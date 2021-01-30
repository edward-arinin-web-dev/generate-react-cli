module.exports = `
import { createAction } from "@reduxjs/toolkit"

export const createTemplateName = createAction(
  "TemplateName/create"
)
export const readTemplateName = createAction(
  "TemplateName/read"
)
export const updateTemplateName = createAction(
  "TemplateName/update"
)
export const deleteTemplateName = createAction(
  "TemplateName/delete"
)
`;
