const createURL = (path) => {
    return window.location.origin + path
}

export const updateEntry = async (id, content) => {
    const res = await fetch(new Request(createURL(`/api/blog/${id}`), {
        method: 'PATCH', 
        body: JSON.stringify({content}),
    }))

    if(res.ok) {
        const data = await res.json()
        return data.data
    }
}

export const createNewEntry = async () => {
    const res = await fetch(
        new Request(createURL('/api/blog'), {
            method: 'POST',
        })
    )

    if(res.ok) {
        const data = await res.json()
        return data.data
    }
}
 