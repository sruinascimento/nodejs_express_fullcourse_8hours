const os = require("os");

//info about current user
const user = os.userInfo();

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} minutes `)

const osModules = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpus: os.cpus()[0]
};


console.log(osModules);
console.log(os.platform());