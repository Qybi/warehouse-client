import { AccessoriesAssignment } from "../accessories-assignment";
import { Course } from "../course";
import { PCAssignment } from "../pcassignment";
import { Student } from "../student";

export interface StudentView {
    surname: string;
    name: string;
    dateOfBirth: string;
    fiscalCode: string;
    emailUser: string;
    schoolIdentifier: string;
    status: string;
    birthCity: string;
    birthCountry: string;
    residenceCity: string;
    residenceCountry: string;
    
    course: Course;
    pcAssignments: PCAssignment[];
    accessoryAssignments: AccessoriesAssignment[];
}
