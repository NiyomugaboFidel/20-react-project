import SideBar from "../components/SideBar"

const UserDashboard: React.FC = () => {
  return (
    <div className=" relative">
      <div className="bg-white flex justify-between min-h-[100vh] w-full min-w-full">
          <div className="bg-gray-800 w-[30%] md:w-[15%] p-2">
            <SideBar />
          </div>   
          <div className="pl-5 w-[70%] bg-white">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae itaque libero cumque. Itaque atque temporibus odit? Porro dolore esse commodi id ad praesentium, accusantium repellendus cum veniam omnis alias assumenda?
            </p>
          </div>   
      </div>
    </div>
  )
}

export default UserDashboard