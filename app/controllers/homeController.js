const homeController = ()=>{
    return{
        getHome(req,res){
            res.send("welcome to india")
        }
    }
}

module.exports = homeController;