require("dotenv").config(); 
import server from './api/server';

const PORT = process.env.PORT || 4003;

// server.get("/test", (req,res) => {
//    res.status(200).send("server running..");

// })

server.listen(PORT, () =>  console.log(`server running in port ${PORT}`));