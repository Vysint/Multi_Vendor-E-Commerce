import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <div>
      <h2>{userInfo.name}</h2>
      <img src={userInfo.imageURL} alt="" style={{width:'300px', marginLeft:"40%"}}/>
    </div>
  );
};

export default Home;
