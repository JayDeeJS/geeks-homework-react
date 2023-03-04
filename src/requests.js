import { $api } from "./requester"

const ENDPOINTS = {
    TODOS: '/todos'
}

export const fetchTodos = async() => {
    const response = $api.get(ENDPOINTS.TODOS)
    return response
}

export const fetchTodosById = async(id) => {
    const response = $api.get(`${ENDPOINTS.TODOS}/${id}`)
    return response
}

export const fetchTodosByParams = async(params) => {
    const response = $api.get(ENDPOINTS.TODOS, {params})
    return response
}