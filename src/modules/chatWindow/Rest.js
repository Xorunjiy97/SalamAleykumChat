export function addNewMessage(message){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:2021/addMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
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

export function getChat(){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:2021/getChat')
            .then(response => {
                if (response.ok) {
                    resolve(response)
                } else {
                    reject(new Error('НЕ Нашел'))
                }
            })
        });
    } catch (e) {
        console.log('ERROR:', e)
    }
}

export function deleteUser(user){
    try {
        return new Promise((resolve, reject) => {
            fetch('http://localhost:2021/deleteUser', {
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
