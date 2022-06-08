import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaRegClock } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import useStyles from "../js/Formstyles";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const Getarticle = () => {

    // Read request
    const [APIData, setAPIData] = useState([]);
    // const [readMore, setReadMore] = useState(true)
    useEffect(() => {
        axios.get(`https://627961304a5ef80e2c08f4a0.mockapi.io/articledata`)
            .then((response) => {
                setAPIData(response.data);
                // console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])


    // Delete request
    const handleDelete = (id) => {
        if (window.confirm("Do you really want to delete this article?")) {
            axios.delete(`https://627961304a5ef80e2c08f4a0.mockapi.io/articledata/${id}`)
                .then(() => {
                    console.log("delete request succeeded")
                    axios.get(`https://627961304a5ef80e2c08f4a0.mockapi.io/articledata`)
                        .then((response) => {
                            setAPIData(response.data);
                        })
                        .catch(err => console.log(err))
                }).catch(err => console.log("delete request failed, error: ", err))
        }
        else {
            console.log("Delete request was cancelled")
        }

    }

    const classes = useStyles()

    return (
        <div className={`container ${classes.articleContainer}`}>
            {APIData.map(({ id, title, author, content, date }) => {
                const showDate = date.split('/').map(i => parseInt(i))

                return (
                    <div key={id} className={`mb-5 py-5 ${classes.bBottom}`}>
                        <div
                            className={`p-2 d-flex justify-content-between`}>
                            <div>
                                <h3 className="pb-2 fw-bold fs-1">{title}</h3>
                                <small
                                    className="d-flex align-items-center">
                                    <FaRegClock className="me-2" />
                                    {`${showDate[0]} ${months[showDate[1] - 1]}, ${showDate[2]}`}
                                </small>
                            </div>
                            <div className={`d-flex`}>
                                <Link to={`/update/${id}`}>
                                    <button
                                        className={`btn mx-2 ${classes.icons}`}>
                                        <FiEdit />
                                    </button>
                                </Link>
                                <Link to={`/`}>
                                    <button
                                        className={`btn mx-2 ${classes.icons}`}
                                        onClick={() => handleDelete(id)}>
                                        <RiDeleteBin6Line />
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <p className="py-4 px-2 fs-5">
                            {content}
                            {/* {content.substr(0,content.indexOf('.') + 1)}
                            {readMore ?
                                <a href="#" className={`${classes.anchor}`} onClick={() => setReadMore(false)}> Read more...</a>
                                :
                                <>
                                    {content.substr(content.indexOf('.') + 1)}
                                    <br/>
                                    <a href="#" className={`${classes.anchor}`} onClick={() => setReadMore(true)}> Read less</a>
                                </>
                            } */}
                        </p>
                        <div>
                            <span className="p-2">Posted by</span>{author}
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Getarticle


/* <div className="p-2">
                <h3>Title</h3>
                <small><i class="fa-solid fa-clock-eight"></i>May 5, 2022</small>
            </div>
            <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel praesentium soluta exercitationem non ipsa ad nulla
                suscipit magni quo quis. Molestias vel nihil, labore
                sapiente distinctio suscipit doloribus nemo placeat
                soluta. Quo dolor, atque autem odio similique nihil
                aperiam consequatur voluptas, quam blanditiis ea tempora
                ullam facere? Ullam, vel vitae. Excepturi placeat natus
                nostrum reiciendis fugiat repudiandae hic in, voluptatibus
                amet recusandae adipisci ex assumenda minus nulla, laboriosam
                alias facilis. At reiciendis alias ratione ipsum. Eveniet
                odio non et tempore neque facere, dolore sunt facilis officia
                debitis ipsam, consequatur perspiciatis? Eum voluptatibus labore nulla
                perspiciatis quaerat voluptas aliquid ipsam saepe.
            </p>
            <div className="p-2">
                <div className="row">
                    <div className="col"><span className="fw-bold">Author</span>: Dhiraj Sharma</div>
                </div>
            </div> 
            <div className="btn-container">
                <Link to='/update'><button type="submit" className="btn btn-primary m-3">Edit</button></Link>
                <Link to='/delete'><button type="submit" className="btn btn-danger m-3">Delete</button></Link>
            </div> */