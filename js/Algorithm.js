class Algorithm {
    constructor(array, method) {
        this.array = array;
        this.method = method;
        this.animationHelper = new Animate(this.array)
        this.animationSteps = []
        this.moveAmount = array.length
        this.moveFactor = array.length/2
    }
    timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    async sleep(fn, ...args) {
        await this.timeout(2000)
        return fn.bind(this)(...args)
    }
    mergeSort(unsortedArray) {
        if (unsortedArray.length <= 1) {
            return unsortedArray;
        }
        const middle = Math.floor(unsortedArray.length / 2);
        const left = unsortedArray.slice(0, middle);
        const right = unsortedArray.slice(middle);
        this.animationSteps.push([this.animationHelper.splitArray, [unsortedArray, middle, this.moveAmount]])
        this.moveAmount /= this.moveFactor
        return this.merge(
            this.mergeSort(left), this.mergeSort(right)
        );
    }
    merge(left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex].name < right[rightIndex].name) {
                resultArray.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                resultArray.push(right[rightIndex]);
                rightIndex++;
            }
            // if(resultArray.length > 1) {
            //     this.animationSteps.push([this.animationHelper.swap, [resultArray, leftIndex, rightIndex]])
            // }
        }
        resultArray = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
        // if(leftIndex < rightIndex) {
            this.animationSteps.push([this.animationHelper.swap, [resultArray, leftIndex, rightIndex]])
        // }
        // else {
        //     this.animationSteps.push([this.animationHelper.swap, [resultArray, leftIndex, rightIndex]])
        // }
        this.moveAmount *= this.moveFactor
        this.animationSteps.push([this.animationHelper.joinArray, [resultArray, rightIndex, this.moveAmount]])
        return resultArray
    }
    quickSort() {
        console.log('quick sort implementation');
    }
    bubbleSort() {
        console.log('bubble sort implementation');
    }
    heapSort() {
        console.log('heap sort implementation');
    }
    sort() {
        switch(this.method) {
            case SORTING_METHODS.MERGE:
                console.log(this.mergeSort(this.array))
                this.animationHelper.executeSteps(this.animationSteps)
                return true
            case SORTING_METHODS.QUICK:
                return this.quickSort();
            case SORTING_METHODS.BUBBLE:
                return this.bubbleSort();
            case SORTING_METHODS.HEAP:
                return this.heapSort();
            default:
                console.log('ERROR! SORTING METHOD NOT FOUND!');
        }
    }
}
const SORTING_METHODS = {
    MERGE: 'Merge',
    QUICK: 'Quick',
    BUBBLE: 'Bubble',
    HEAP: 'Heap'
}