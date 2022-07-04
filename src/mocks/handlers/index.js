import { userHandlers } from './user'
import { toDosHandlers } from './toDo'

export const handlers = [...userHandlers, ...toDosHandlers]
