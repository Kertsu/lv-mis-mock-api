export {
  getCollegeStudents,
  seedCollegeStudents,
  getCollegeStudentByIdAndIdType,
  truncateCollegeStudentsCollection,
  getCollegeSectionByStudentId,
  getCollegeSubjectsByStudentId,
} from "./college-student";

export {
  getCollegeSubjects,
  getCollegeSubjectById,
  getCollegeStudentsBySubjectId,
  getCollegeSectionsBySubjectId,
  getCollegeInstructorBySubjectId,
} from "./college-subject";

export {
  getCollegeInstructors,
  getCollegeInstructorById,
  getCollegeSubjectsByInstructorId,
} from "./college-instructor";
