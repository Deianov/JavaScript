function roadRadar([currentSpeed, area]) {

    const speedLimits = {
        residential: 20,
        city: 50,
        interstate: 90,
        motorway: 130
    }

    const maxSpeed = speedLimits[area]
    if (typeof maxSpeed === 'undefined') {
        return
    } 

    const result = checkSpeed(currentSpeed, maxSpeed)
    if (result != null) {
        console.log(result)
    }

    function checkSpeed(speed, limit) {
        if (speed <= limit) return null
        if (speed - limit > 40) return 'reckless driving'
        if (speed - limit > 20) return 'excessive speeding'
        return 'speeding'
    }
}

roadRadar([40, 'city'])