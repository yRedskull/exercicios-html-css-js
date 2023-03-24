function random (max, min) {
    rand = Math.random() * (max-min) + min
    return Math.floor(rand)
}



while (1) {
    const random_n = random(1, 40)
    console.log(random_n)
    if (random_n == 35) break
}