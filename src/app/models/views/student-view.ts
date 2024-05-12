import { AccessoriesAssignment } from "../accessories-assignment";
import { Course } from "../course";
import { PCAssignment } from "../pcassignment";
import { Student } from "../student";

export interface StudentView {
    surname: string;
    name: string;
    dateOfBirth: string;
    fiscalCode: string;
    course: Course;
    emailUser: string;
    pcAssignments: PCAssignment[];
    accessoryAssignments: AccessoriesAssignment[];
}
