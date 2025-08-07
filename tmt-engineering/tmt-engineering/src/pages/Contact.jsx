import { Helmet } from "react-helmet-async";
import ContactForm from "../components/contact/ContactFrom";
import WeAreHere from "../components/contact/WeAreHere";


const Contact = () => {
    return (
       <><Helmet>
            <title>Contact | TMT-Group</title>
        </Helmet>
       <ContactForm />
       <WeAreHere />
       </>
    );
};

export default Contact;