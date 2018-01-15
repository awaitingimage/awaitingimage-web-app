export interface Content {
    summary: string;
    experiences: Array<Experience>
    primarySkills: Array<string>;
    secondarySkills: Array<string>;
}

export interface Experience {
    title: string;
    dates: string;
    bullets: Array<string>;
}