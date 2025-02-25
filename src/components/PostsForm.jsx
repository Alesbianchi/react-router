import { useState } from 'react';




const PostsForm = () => {

    const [postsState, setPostsState] = useState(posts);
    const [formData, setFormData] = useState(initialFormData);

    function handleFormData(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormData((currentFormData) => ({
            ...currentFormData, [e.target.name]: value,

        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // setPostsState((currentPosts) => [...currentPosts, { id: currentPosts[currentPosts.length - 1].id + 1, ...formData }])
        axios.post("http://localhost:3000/posts", formData)
            .then(res => {
                // console.log(res.data);
                // uso la risposta dell'API per creare il nuovo array menu
                // setMenu((currentMenu) => [...currentMenu, res.data])
                navigate("/pizze");
            }
            )
            .catch(err => console.log(err))
        //resetto il form dopo l'invio
        setFormData(initialFormData);
    }


    return (
        <>
            <h1>form dei posts</h1>

            <form id='formpost' action="#" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="titolo"
                    onChange={handleFormData}
                    value={formData.titolo}
                    placeholder='Nome post'
                />

                <input
                    type="text"
                    name="autore"
                    onChange={handleFormData}
                    value={formData.autore}
                    placeholder='autore post'
                />

                <textarea
                    type="text"
                    name="contenuto"
                    onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder='contenuto post'
                ></textarea>

                <input
                    type="text"
                    name="categoria"
                    onChange={handleFormData}
                    value={formData.categoria}
                    placeholder='categoria post'
                />
                <button>Aggiungi post</button>
            </form>
            {
                postsState.map((post) => (
                    <div key={post.id}>
                        <h2>{post.titolo}</h2>
                        <h3>{post.autore}</h3>
                        <p>{post.contenuto}</p>
                        <div>{post.categoria}</div>

                    </div>
                ))

            }
        </>

    )
}

export default PostsForm