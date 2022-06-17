import React, { useEffect, useState } from "react";
import {
    useParams,
    useNavigate
} from 'react-router-dom'
import axios from "axios";
import useStyles from "./Formstyles";

const getdata = async () => {
    const data = await axios.get(`https://627961304a5ef80e2c08f4a0.mockapi.io/articledata`)
        .then((response) => response)
        .then(res => res.data)
        .catch(err => err)
    return data
}

const Updateform = () => {
    const { id } = useParams()
    const classes = useStyles()
    const navigate = useNavigate()

    const [updateData, setUpdateData] = useState({})
    const [formValues, setFormValues] = useState({ title: "", author: "", content: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        getdata().then(response => response).then((res) => setUpdateData(res.find((item) => item.id == id))).catch(err => err)

        // PUT request
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if (window.confirm("Do you really want to submit?")){
                const newDate = new Date()
                const obj = {...formValues, "date": `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`}
                axios.put(`https://627961304a5ef80e2c08f4a0.mockapi.io/articledata/${id}`, JSON.stringify(obj))
                .then(() => console.log("put request succeeded")).catch(err => console.log("put request failed, err: ", err))
                console.log("submitted successfully",obj)
                navigate('/articles')
            }
        } 

    }, [formErrors])



    const handleUpdate = (event) => {

        event.preventDefault()
        const getFormData = new FormData(event.currentTarget)
        const obj = {}
        for (let [key, value] of getFormData.entries()) {
            obj[key] = value
        }
        setFormValues({title: obj.title, author: obj.author, content: obj.content})
        setFormErrors(validate({title: obj.title, author: obj.author, content: obj.content}));
        setIsSubmit(true);

    }

    

    const validate = (values) => {
        const errors = {}
        if (values.title.split(' ').length > 100) {
            errors.title = `Length must be less than 100 words, current lenght: ${values.title.length}`
        }
        else if (!values.title) {
            errors.title = `Title cannot be empty`
        }
        if (values.author.split(' ').length > 100) {
            errors.author = `Length must be less than 100 words, current lenght: ${values.author.length}`
        }
        else if (!values.author) {
            errors.author = `Author cannot be empty`
        }
        if (values.content.split(' ').length > 5000) {
            errors.content = `Length must be less than 5000 words, current lenght: ${values.content.split(' ').length}`
        }
        else if (!values.content) {
            errors.content = `Content cannot be empty`
        }
        return errors
    }


    const {title, author, content} = updateData

    return (
        <>
            <form onSubmit={(event) => handleUpdate(event)} className={`p-2 ${classes.form}`}>
                <h3 className={`text-center p-3 w-50 ${classes.heading} m-auto`}>Update Article</h3>
                <div className="m-3">
                    <label htmlFor="title" className="form-label fs-6">Title:</label>
                    <input
                        type="text"
                        className={`form-control ${classes.border}`}
                        id="title" 
                        name="title" 
                        defaultValue={title}
                        placeholder="Title" />
                    <span>{formErrors.title}</span>
                </div>
                <div className="mx-3 mt-2 mb-3">
                    <label htmlFor="author" className="form-label fs-6">Author:</label>
                    <input
                        type="text"
                        className={`form-control ${classes.border}`}
                        id="author"
                        name="author"
                        defaultValue={author}
                        placeholder="Author"/>
                    <span>{formErrors.author}</span>
                </div>
                <div className="mt-2 mx-3">
                    <label htmlFor="content" className="form-label fs-6">Comments:</label>
                    <textarea
                        className={`form-control ${classes.border}`} cols={100} rows={6}
                        name="content"
                        id="content"
                        defaultValue={content}
                        placeholder="Leave a comment here">
                    </textarea>
                    <span>{formErrors.content}</span>
                </div>
                <div className="mx-3">
                    <button
                        type="submit"
                        className={`btn p-1 w-100 ${classes.button}`}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default Updateform

