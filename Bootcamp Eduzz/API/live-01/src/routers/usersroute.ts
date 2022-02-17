import { Router, Response, Request, NextFunction} from "express";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction)=>{
    const users = [{userName: "Alysson"}];
    res.status(200).send({users});
});

export default usersRoute;

/*
get /users 
get /users/:uuid 
post /users 
put /users/:uuid
delete /users/:uuid*/