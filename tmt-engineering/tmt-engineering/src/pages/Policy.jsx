import { Helmet } from "react-helmet-async";
import QualityPolicy from "../components/policy/QualityPolicy";


const Policy = () => {
    return (
       <><Helmet>
            <title>Policy | TMT-Group</title>
        </Helmet>
       <QualityPolicy />
       </>
    );
};

export default Policy;