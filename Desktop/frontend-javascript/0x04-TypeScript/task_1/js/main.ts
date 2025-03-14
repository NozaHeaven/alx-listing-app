// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // Readonly: can only be set when initialized
    readonly lastName: string;   // Readonly: can only be set when initialized
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // Optional property
    location: string;
    [key: string]: any;  // Allows additional attributes (e.g., contract)
}

// Example usage
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,  // Additional property
};

console.log(teacher3);
