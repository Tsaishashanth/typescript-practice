//An enum is a way to give names to fixed values.It is used when you have a set of constant options.

enum seatchoice {
    left,  //default enum value = 0
    right = 10, //here we have assgined as 10 so next will be 11
    middle, //here 11 and it continues increment
    fourth
}
const hcseat = seatchoice.left //so enum means basically selecting in the options , it comes undercleancode
const seat = seatchoice.fourth//it gives options to select directly when we write seatchoice.
