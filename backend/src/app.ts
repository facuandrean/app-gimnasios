import express, { Request, Response } from "express";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send("Hola mundo desde typescript");
});

export default app;
