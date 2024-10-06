import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import AuthRoutes from './Routes/Auth.Route.js';
import { ENV_VARS } from "./config/envVar.js";
import { connectDB } from "./config/Db.js";
import MovieRoutes from "./Routes/Movie.Route.js";
import TvRoutes from "./Routes/Tv.Route.js";
import {protectRoute} from "./Middleware/protectRoute.js";
import searchRoutes from "./Routes/Search.Route.js";

const app = express();

const PORT=ENV_VARS.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());


app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/movie', protectRoute, MovieRoutes);
app.use('/api/v1/tv', protectRoute, TvRoutes);
app.use('/api/v1/search', protectRoute, searchRoutes);

if(ENV_VARS.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname ,"/frontend/dist")));

    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"));
    });
}


app.listen(PORT,()=>{
    console.log("Server started at http://localhost:"+ PORT);
    connectDB();
});

