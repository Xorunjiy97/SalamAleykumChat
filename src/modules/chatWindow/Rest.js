export function addNewMessage(message){
    try {
        return fetch("http://localhost:2021/addMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message)
            })
    } catch (e) {
        console.log("ERROR", e);
    }
}

export function getChat(){
    try {
        return fetch("http://localhost:2021/getChat")
            .then(res => res.json());
    } catch (e) {
        console.log("ERROR:", e);
    }
}

export function deleteUser(user){
    try {
        return fetch("http://localhost:2021/deleteUser", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
    } catch (e) {
        console.log("ERROR", e);
    }
}
