import { Link } from "react-router-dom"


const About = () => {
  return (
    <div>
   <h1>About</h1>
   <div className="text-center">
      <Link to={'https://docs.google.com/document/d/1peBh_TvJYPwnaBi0rfdCKvrNrk6-3hrCZ5_DNuHG9lY/edit'} target="blank"><button className="bg-blue-600 text-white py-2 px-4 cursor-pointer rounded-sm">Project Topic Explore ...</button></Link>
   </div>
    </div>
  )
}

export default About