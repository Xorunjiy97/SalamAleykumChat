export function addNewUser(user){
    try {
        return fetch("http://localhost:2021/addUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json());
            
    } catch (e) {
        console.log("ERROR", e);
    }
}