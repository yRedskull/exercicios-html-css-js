function Verify(num) {
    if (typeof num !== 'number' || 0 > num || num > 100) return num
    const div = {  
        3: num % 3 == 0 ? 'Fizz' : '',
        5: num % 5 == 0 ? 'Buzz' : '',
    }
    const fb = div[3] + div[5]
    return fb
}
for (let i = 0; i<= 140; i++) {
    console.log(i, Verify(i))
}  