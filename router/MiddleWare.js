const DataFromUser = ((req,res,next )=>{
    console.log(req.host)
    next()
})
module.exports = DataFromUser