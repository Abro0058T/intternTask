
const express=require('express')
const lodash=require('lodash')


exports.defaultControler= (req,res)=>{
    //   console.log(req.blogAnalysis,"undefined")
      res.send(req.blogAnalysis)

}

exports.testRoute=(req,res)=>{
    console.log("hello world")
    res.send("Hello world")
}
exports.searchResponse=(req,res)=>{
    const searchBlogs=lodash.filter(req.blogAnalysis.blog,blog=>lodash.includes(lodash.toLower(blog.title),req.query.query))
// console.log(searchBlogs)
    res.send(searchBlogs)
}