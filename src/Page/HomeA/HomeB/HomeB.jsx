import Banner from "../Banner/Banner";
import Batch from "../Batch/Batch";
import CourseFr from "../CourseFr/CourseFr";
import Developer from "../Developer/Developer";
import Expand from "../Expand/Expand";
import Frequently from "../Frequently/Frequently";
import Important from "../Important/Important";
import Instructor from "../Instructor/Instructor";
import Students from "../Students/Students";


const HomeB = () => {
  return (
    <div>
      <Banner></Banner>
      <Developer></Developer>
      <Batch></Batch>
      <CourseFr></CourseFr>
      <Instructor></Instructor>
      <Expand></Expand>
      <Students></Students>
      <Frequently></Frequently>
      <Important></Important>
    </div>
  );
};

export default HomeB;