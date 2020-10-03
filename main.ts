namespace test { 
    /**
    * Address LEDs linearly row first
    */
   //% blockId=screenmagiclotat
   //% block="plot at index"
   //% index.min=0 index.max=25
    export function plotAt void {
        index |= 0
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x, y)
 }
}