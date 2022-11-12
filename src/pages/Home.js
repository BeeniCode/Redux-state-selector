import React, {useState} from "react";
import { useSelector } from "react-redux";

const Home = () => {
    const [text, setText] = useState("heloo");
    const mode = useSelector((state) => state.common.mode)
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Test Converted To Uppercase ", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // props.showAlert("Test Converted To Lowercase ", "success");
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className={` text-${mode === 'light' ? 'dark' : 'light'}`}>
                <div className="mb-3">
                    <textarea className={`form-control bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={onChangeHandler} id="my-box" rows="7"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}> Uper Case</button>
                <button className="btn btn-primary mx-4 " onClick={handleLoClick}> lower Case</button>
            </div>
            <div className={`container text-${mode === 'light' ? 'dark' : 'light'}`} >
                <h2>Semmary</h2>
                <p>Words {text.split(" ").length} And Latters {text.length}</p>
                <p>Read In {0.008 * text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Home;