import { Student } from '../models/student';

export interface IAppState {
    students: Student[],
    filteredStudents: Student[],
}