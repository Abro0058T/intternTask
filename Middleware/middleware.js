
var requests = require('requests');
const lodash=require('lodash')
const ErrorHandler=require("../utils/errorHandling")
var cachedetails=[0,{}]
var time =lodash.memoize(lodash.values)
exports.analyzeBLogs= (req,res,next)=>{
    const date=new Date();
    var min=date.getMinutes()

    const blogAnalysis={};
    console.log(min)
    if(time(cachedetails)[0]<min){
          requests('https://intent-kit-16.hasura.app/api/rest/blogs', { headers:{'x-hasura-admin-secret':'32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'} ,timeout:10000})
        .on('data', function (chunk) {
            // console.log(chunk)
            const blog=JSON.parse(chunk).blogs
            blogAnalysis.blog=blog;
            blogAnalysis.totalblog=lodash.size(blog)
            blogAnalysis.maxBLog=lodash.maxBy(blog,lodash.property('title.length'))
            blogAnalysis.contailPrivary=lodash.filter(blog,blog=>lodash.includes(lodash.toLower(blog.title),'privacy'))
            blogAnalysis.uniqueBlogs=lodash.uniqBy(blog,'title').map(blog=>blog.title)
            
            req.blogAnalysis=blogAnalysis
            time.cache.set(cachedetails,[min,blogAnalysis])
            console.log(time(cachedetails))
            next()
        }).on('end',function(error){
            if(error) return res.status(400).json({message:"REquest time ouit "});
            console.log('end');
        })
    }
    else{
        console.log(time(cachedetails)[1],"hello world")
        res.json(time(cachedetails)[1])
    }
}