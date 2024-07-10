import middy from '@middy/core';
import cors from '@middy/http-cors';
import httpErrorHandler from '@middy/http-error-handler';
import * as todoLogic from '../../business/todos.mjs';
import { getUserId  } from '../utils.mjs';
const { createTodo } = todoLogic;

export const handler = middy()
  .use(httpErrorHandler())
  .use(
    cors({
      credentials: true
    })
  )
  .handler(async (event) => {
    const newTodo = JSON.parse(event.body);
    const userId = getUserId(event);
  
    const todo = await createTodo(newTodo, userId);
    return {
      statusCode: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        item: todo
      })
    };
  })