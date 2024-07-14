import Batch from "../../HomeA/Batch/Batch";
import CoursesBanner from "../CoursesBanner/CoursesBanner";
import Specialty from "../Specialty/Specialty";
import WillLearn from "../WillLearn/WillLearn";


const CoursesB = () => {
  return (
    <div>
      <CoursesBanner></CoursesBanner>
      <Batch></Batch>
      <Specialty></Specialty>
      <WillLearn></WillLearn>
    </div>
  );
};

export default CoursesB;