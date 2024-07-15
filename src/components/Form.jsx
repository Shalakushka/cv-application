import ProfileForm from './ProfileForm.jsx'
import SummaryForm from './SummaryForm.jsx'
import ExperienceForm from './ExperienceForm.jsx'
import EducationForm from './EducationForm.jsx'
import SkillsForm from './SkillsForm.jsx'
import LanguagesForm from './LanguagesForm.jsx'

function Form() {
    return (
        <div className="form">
            <ProfileForm />
            <SummaryForm />
            <ExperienceForm />
            <EducationForm />
            <SkillsForm />
            <LanguagesForm />
        </div>
    );
}

export default Form;