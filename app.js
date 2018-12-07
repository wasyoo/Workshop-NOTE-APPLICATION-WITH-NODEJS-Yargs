let yargs = require("yargs")
let node = require("./node")

let argv = yargs.argv

if (argv._[0] === "add"){
    node.add(argv.title,argv.body)
}