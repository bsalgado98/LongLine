class Animate {
    constructor(array) {
        this.array = array
        this.speed = 10
    }
    splitArray([[array, index, moveAmount]]) {
        console.log('SPLIT')
        let count = 1
        for(let i = 0; i < array.length; i++) {
            array[i].scale(this.speed)
        }
        let interval = setInterval(() => {
            for(let i = 0; i < index; i++) {
                array[i].x += moveAmount/2
            }
            for(let i = index; i < array.length; i++) {
                array[i].x += moveAmount
            }
            if(count > 100) {
                clearInterval(interval)
            }
            else {
                count++
            }
        }, this.speed)
    }
    joinArray([[array, index, moveAmount]]) {
        console.log('JOIN')
        console.log(array)
        let count = 1
        for(let i = 0; i < array.length; i++) {
            array[i].scale(this.speed)
        }
        let interval = setInterval(() => {
            for(let i = 0; i < index; i++) {
                array[i].x -= moveAmount
            }
            for(let i = index; i < array.length; i++) {
                array[i].x -= moveAmount/2
            }
            if(count > 100) {
                clearInterval(interval)
            }
            else {
                count++
            }
        }, this.speed)
    }
    swap([[array, i1, i2]]) {
        console.log('SWAP')
        console.log({array: array, i1: i1, i2: i2})
        let first, second = null
        if(array[i1].x < array[i2].x) {
            first = array[i1]
            second = array[i2]
        }
        else {
            first = array[i2]
            second = array[i1]
        }
        let dest = second.x
        let interval = setInterval(() => {
            first.x += 1
            second.x -= 1
            console.log('swapping')
            if(first.x > dest) {
                clearInterval(interval)
            }
        }, this.speed)
    }
    executeSteps(steps) {
        let offset = 0
        for(let step of steps) {
            console.log(step[1])
            setTimeout(() => {
                step[0]([step[1]])
            }, 2000 + offset)
            offset += 2000
        }
    }
    wait(ms) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > ms){
            break;
            }
        }
    }
}