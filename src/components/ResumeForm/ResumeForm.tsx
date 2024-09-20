import BioSection from "./components/BioSection";
import './styles.scss';

const ResumeForm = () => {
    return (
        <div className="resume-form">
        <BioSection />
        <BioSection />
        <BioSection />
        <BioSection />
        </div>
    );
}

export default ResumeForm;