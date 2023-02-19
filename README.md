# Feedback application
Application to get feedbacks from the user and save them on the server
> - [App](http://ec2-100-26-243-120.compute-1.amazonaws.com/)
> - [API](http://ec2-100-26-243-120.compute-1.amazonaws.com/feedbacks)

## Technologies
- Frontend
  - React, Styled Components, React Hook Form
  - Redux, Redux Thunk
- Backend
  - NodeJS, NestJS
  - PostrgeSQL, TypeORM

## Deployment
Application was deployed on AWS EC2 server with Ubuntu 22.04 + Nginx 1.18.0
- Nginx serves static UI files that was built remotely
- NodeJS application was started on 3000 port as service. [Service config](https://github.com/whiteadam2/feedback_app/blob/master/feedback-server/feedback.service)
- Ngix was configured to redirect requests from /feedbacks to localhost:3000/feedbacks to allow API acces from outside.

## API

#### Getting all feedbacks

<details>
 <summary><code>GET</code> <code><b>/feedbacks</b></code></summary>

##### Parameters

> None
</details>

#### Creating new feedback

<details>
 <summary><code>POST</code> <code><b>/feedbacks</b></code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | name      |  required | string, 3 symbols min length  | user name  |
> | email     |  required | string   | user email |
> | feedback     |  required | string, 10 symbols min length    | user feedback |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json; charset=utf-8` | `{"id", "name", "email", "feedback"}`                                   |
> | `400`         | `application/json`                | `{"statusCode": "400", "message", "error": "Bad Request"}`                            |

</details>

