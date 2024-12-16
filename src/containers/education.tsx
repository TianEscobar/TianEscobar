import Container from '@/components/site/container';
import EducationData from '@/data/education.json';

type Education = {
    school: string;
    course: string;
    startDate: string;
    endDate?: string | null;
};

const educations = EducationData as unknown as Education[];

export default function Education() {
    return (
        <Container>
            <h1 className='text-3xl font-bold'>Education</h1>
            {educations
                .sort(
                    (a, b) =>
                        new Date(b.startDate).getFullYear() -
                        new Date(a.startDate).getFullYear()
                )
                .map((education) => {
                    const startDate = new Date(education.startDate);
                    return (
                        <div
                            className='flex items-center justify-between'
                            key={`${
                                education.school
                            }@${startDate.getFullYear()}`}
                        >
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    {education.school}
                                </span>
                                <span>{education.course}</span>
                            </div>
                            <span className='float-right'>
                                {startDate.getFullYear()}
                                {' – '}
                                {education.endDate
                                    ? new Date(education.endDate).getFullYear()
                                    : 'Present'}
                            </span>
                        </div>
                    );
                })}
        </Container>
    );
}
