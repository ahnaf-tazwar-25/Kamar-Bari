import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Redirector(props) {
    // const getAllContacts = async () => {
    //     const res = await axios
    //         .get("/users")
    //         .then((response) => {
    //             console.log(response.data.user[0].password);
    //             if (response.data.user[0].password === "pass_12")
    //                 console.log("Working");
    //             else {
    //                 try {
    //                     navigate("/ceo");
    //                     console.log("After: ");
    //                     // ...
    //                 } catch (error) {
    //                     console.log("This is error:\n" + error);
    //                 }
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("This was the error: " + error);
    //             navigate("/");
    //         });
    // };

    const navigate = useNavigate();

    useEffect(() => {
        if (props.type === "c") navigate("/ceo");
        else if (props.type === "m") navigate("/manager");
        else navigate("/");
    }, []);
    return null;
}
