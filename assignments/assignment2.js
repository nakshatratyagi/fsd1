const EventEmitter = require("events");

const student = new EventEmitter();

let name = "Nakshatra";
student.on("login", () => {
    console.log(`${name} logged in`);
});

student.on("assignment", () => {
    console.log(`${name} submitted the assignment`);
});

student.on("logout", () => {
    console.log(`${name} logged out`);
});

student.on("display", () => {
    console.log(`Student: ${name}`);
});

student.on("exit", () => {
    console.log("Exiting application...");
});

student.emit("login");
student.emit("display");
student.emit("assignment");
student.emit("logout");
student.emit("exit");