export function addNewMessage(message){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/addMesage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            })
            .then(response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        })
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function addNewUser(user){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/addNewUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })
            .then(response => {
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        })
    } catch (e) {
        console.log('ERROR', e);
    }
}

export function getChat() {
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:3000/getChat')
            .then(response => {
                console.log(response)
                if (response.ok) {
                    resolve(response.json())
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        });
    } catch (e) {
        console.log('ERROR:', e)
    }
}
