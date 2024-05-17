export class UsefulUtilities {
    static cutDate(fulldate: string): string {
        return fulldate.split('T')[0];
    }
}
