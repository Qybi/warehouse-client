import { Course } from "./course";

export interface Student {
  id: number;
  userId: number;
  schoolIdentifierId: string;
  iALManId: string;
  emailUser: string;
  emailPersonal: string;
  surname: string;
  name: string;
  courseId: number;
  dateOfBirth: string;
  fiscalCode: string;
  gender: string;
  phoneNumber: string;
  birthCity: string;
  birthProvince: string;
  birthNation: string;
  residenceCity: string;
  residenceProvince: string;
  residenceNation: string;
  status: string;
  ammissionDate: string;
  resignationDate: string;
  courseStartAge: number;
  examOutcome: string;
  examScore: number;
  examHonors: string;
  schoolDegreeTitle: string;
  schoolDegree: string;
  professionalStatus: string;
  isInInternship: boolean;
  notes: string;

  course: Course;
}
