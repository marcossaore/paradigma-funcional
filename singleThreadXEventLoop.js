function esperarPor (tempo) {
    const futuro = Date.now() + tempo
    while(Date.now() < futuro) {}
}

//event-queue
setTimeout(() => console.log(
    'O evento dentro do settimeout é executado depois que todas as funcões da heap foram executadas'
), 3000)

// single thread
esperarPor(5000)
esperarPor(1000)
console.log('Fim!')