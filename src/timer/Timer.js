import {Button, Card, ProgressBar} from 'react-bootstrap';
import {useEffect, useState} from 'react';

function Timer({initialTime = 120}) {
    const [time, setTime] = useState(initialTime);
    const [ticking, setTicking] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (ticking) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        setTicking(false);
                        return 0;
                    }
                    return prevTime - 1;
                }); // თუ prevTime > 1, წიკწიკი (ticking) გრძელდება (prevTime-ს ვაკლებთ 1-ს), თუ არა და, ჩერდება.
            }, 1000); // ეს მეორდება ყოველ წამს წიკწიკის გაჩერებამდე.
            setIntervalId(intervalId); // თუ წიკწიკი არის, intervalId ცვლადი - ყოველწამიერი შემოწმება ენიჭება intervalId სთეითს.
        } else {
            clearInterval(+intervalId); // თუ არა, setInterval-ით დაწყებული პროცესი ჩერდება.
        }
        return () => clearInterval(+intervalId); // მომდევნო render-ის წინ ძველი წიკწიკი ჩერდება.
    }, [ticking]);

    const toggleTicking = (prevState) => {
        setTicking((prevState) => !prevState);
    };

    const reset = () => {
        setTicking(false);
        setTime(initialTime);
    };

    const pad = (num) => `${num < 10 ? `0` : ``}${num}`;

    const formatTime = (time) => {
        const s = time % 60;
        const m = Math.floor(time / 60);
        const h = Math.floor(time / 3600);
        return `${pad(h)}:${pad(m)}:${pad(s)}`;
    };

    const progress = time / initialTime * 100;

    return (
        <Card>
            <Card.Body>
                <h1 className="display-1">{formatTime(time)}</h1>
                <Button
                    variant="outline-primary"
                    className="rounded-pill"
                    disabled={!ticking && !time}
                    onClick={toggleTicking}
                >
                    {
                        ticking ? 'pause' : 'start'
                    }
                </Button>
                <Button
                    variant="outline-secondary"
                    className="rounded-pill ms-2"
                    onClick={reset}
                >
                    reset
                </Button>
            </Card.Body>
            <Card.Footer>
                <ProgressBar variant="success" now={progress} label={`${progress}%`}/>
            </Card.Footer>
        </Card>
    );
}

export default Timer;
