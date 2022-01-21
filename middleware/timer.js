const timer = (req, res, next) => {
    let date = new Date()
    let day = date.getDay();
    let hours = date.getHours();
    if ((hours < 9 || hours > 17) || (day == 6 || day == 0)) {
        
        res.send("<h1>The web application is only available during working hours (Monday to Friday,  from 9 to 17)</h1>")
    } else {
        next();
    }
}
module.exports = timer