import { Link } from "react-router-dom"


const About = () => {
  return (
    <div className="text-white py-8 px-8">
      <h1 className="text-xl font-semibold">About</h1><br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic alias deserunt quod enim quidem fugit inventore eos cumque voluptate dolorem ex minus, voluptates itaque, doloribus molestias tempora cupiditate corrupti? <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eum suscipit exercitationem! Minus fugiat, in eligendi et minima iure aliquid maiores, officiis quia voluptas quae, eveniet eaque beatae deleniti quo.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime, ullam perspiciatis delectus rerum saepe doloribus, commodi error laboriosam deleniti earum sit vero sint. Optio ratione velit dolore omnis deserunt!
      </p>
      <div className="text-center pt-8">
        <Link to={'https://docs.google.com/document/d/1peBh_TvJYPwnaBi0rfdCKvrNrk6-3hrCZ5_DNuHG9lY/edit'} target="blank"><button className="bg-purple-500 text-white py-2 px-4 cursor-pointer rounded-sm hover:bg-purple-800">Project Topic Explore ...</button></Link>
      </div>
    </div>
  )
}

export default About