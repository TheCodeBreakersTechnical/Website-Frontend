import React from "react";
import {
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import useStyles from "../../components/js/Articlepage/Formstyles";
import Getarticle from "../../components/js/Articlepage/Getarticle";
import Createform from "../../components/js/Articlepage/Createform";
import Updateform from "../../components/js/Articlepage/Updateform";

// const Data = [
//   {
//     "id": 1,
//     "title": "Computers",
//     "author": "Charles Babbage",
//     "content": "All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.",
//     "date": "03/02/2020"
//   },
//   {
//     "id": 2,
//     "title": "The Run Machine",
//     "author": "Virat Kohli",
//     "content": "Sometimes it's just better not to be seen. That's how Harry had always lived his life. He prided himself as being the fly on the wall and the fae that blended into the crowd. That's why he was so shocked that she noticed him.",
//     "date": "13/04/2020"
//   },
//   {
//     "id": 3,
//     "title": "The Nightingale of India",
//     "author": "Sarojini Naidu",
//     "content": "The red line moved across the page. With each millimeter it advanced forward, something changed in the room. The actual change taking place was difficult to perceive, but the change was real. The red line continued relentlessly across the page and the room would never be the same.",
//     "date": "12/08/2020"
//   },
//   {
//     "id": 4,
//     "title": "Mr 360",
//     "author": "AB de Villiers",
//     "content": "There wasn't a whole lot he could do at that moment. He played the situation again and again in his head looking at what he might have done differently to make the situation better. No matter how many times he relived the situation in his head, there was never really a good alternative course of action. There simply wasn't a whole lot he could have done in that particular moment.",
//     "date": "9/12/2020"
//   }

// ]


const NavBar = () => {
  return <h1 className="p-4 mb-3 text-center text-white border">Navigation Component</h1>
}



const Article = () => {

  const location = useLocation()
  const classes = useStyles()

  return (
    <div className={location.pathname !== '/articles' ? `${classes.article}`: ``}>
      <NavBar />
      <div className="container">
        {location.pathname === '/articles' ?
          <>
            <Link index="true" to='create'><button type="submit" className={`btn m-3 d-flex align-items-center ${classes.button}`}><IoIosAddCircleOutline className="me-2" />Add</button></Link>

          </>
          : ""
        }

        <Routes>
          <Route path="/" element={<Getarticle />} />
          <Route index path="create" element={<Createform />} />
          <Route index path="update/:id" element={<Updateform />} />
        </Routes>
      </div>
    </div>
  )
}

export default Article;

