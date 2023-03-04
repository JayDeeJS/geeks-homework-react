import { useNavigate } from "react-router-dom";

const AboutPage = () => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate('/')}>About page</div>
    )
};

export default AboutPage;