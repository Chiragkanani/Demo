const homeController = ()=>{
    return{
        getHome(req,res){
            res.send(req.cookies)
        }
    }
}

module.exports = homeController;