import React, { useState, useEffect } from 'react';

// Define an array of fields or professions in chemistry
const chemistryFields: string[] = [
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Analytical Chemistry",
    "Physical Chemistry",
    "Biochemistry",
    "Chemical Engineering",
    "Environmental Chemistry",
    "Materials Science",
    "Pharmaceutical Chemistry",
    "Forensic Chemistry"
];

const ChemistryFields: React.FC = () => {
    const [currentField, setCurrentField] = useState<string | null>(null);

    useEffect(() => {
        chemistryFields.forEach((field, index) => {
            setTimeout(() => {
                setCurrentField(`${field}`);
            }, index * 3000); // 3000ms = 3 seconds
        });
    }, []);

    return (
        <>
            {currentField}
        </>
    );
};

export default ChemistryFields;
