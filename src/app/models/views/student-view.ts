import { AccessoryAssignment } from "../accessory-assignment";
import { Course } from "../course";
import { PCAssignment } from "../pcassignment";
import { Student } from "../student";

export interface StudentView {
    id: number;
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
    accessoriesAssignments: AccessoryAssignment[];
}
