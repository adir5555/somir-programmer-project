import Banner from "../Banner/Banner";
import Batch from "../Batch/Batch";
import CourseFr from "../CourseFr/CourseFr";
import Frequently from "../Frequently/Frequently";
import Instructor from "../Instructor/Instructor";
import Students from "../Students/Students";


const HomeB = () => {
  return (
    <div>
      <Banner></Banner>
      <Batch></Batch>
      <CourseFr></CourseFr>
      <Instructor></Instructor>
      <Students></Students>
      <Frequently></Frequently>
    </div>
  );
};

export default HomeB;