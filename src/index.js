import app from "./app";
const main=()=>{
app.listen(app.get("port"));//puerto en el cual va escuchar la aplicacion
console.log("Server on port")
};

main();