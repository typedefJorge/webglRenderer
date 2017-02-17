export class Float32Vector
{
    arr: Float32Array;
    size: number;

    constructor(arr: Float32Array)
    {
        this.arr = arr;
        this.size = arr.length;
    }

    addNumber(number: number)
    {
        const newSize = this.size + 1;
        if(newSize >= this.arr.length)
        {
            let oldArr = this.arr;
            this.arr = new Float32Array(newSize * 2);
            this.arr.set(oldArr);
        }
        this.arr[this.size] = number;
        this.size = newSize;
    }

    addArray(arr: Float32Array | Array<number>)
    {
        let newSize = this.size + arr.length;
        if(newSize >= this.arr.length)
        {
            let oldArr = this.arr;
            this.arr = new Float32Array(newSize * 2);
            this.arr.set(oldArr);
        }
        this.arr.set(arr, this.size);
        this.size = newSize;
    }
}