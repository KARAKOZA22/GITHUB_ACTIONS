function greet(name){

    return `Hello, ${name}`

}

module.exports = greet

if (requestAnimationFrame.main === module){
    console.log(greet("world"))
}
