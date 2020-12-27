export function addNewUser(user){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:2021/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then(response => {
                if (response.ok) {
                    resolve(response)
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        })
    } catch (e) {
        console.log('ERROR', e);
    }
}