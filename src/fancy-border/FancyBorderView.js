import FancyBorder from "../FancyBorder";

function FancyBorderView() {
    return (
        <div className="m-5">
            <FancyBorder>
                <ul>
                    <li>asdf</li>
                    <li>asdf</li>
                    <li>asdf</li>
                    <li>asdf</li>
                </ul>
            </FancyBorder>
            <FancyBorder>
                <h1>Title</h1>
                <p>asdf asdf asdf asdf asdf</p>
            </FancyBorder>
        </div>
    )
}

export default FancyBorderView;