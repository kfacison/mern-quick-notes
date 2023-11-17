export async function addNote(newNote){
    try {
        const response = await fetch("/notes",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newNote)
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getNotes(){
    try {
        const response = await fetch("/notes",{
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify('')
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}