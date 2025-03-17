import Button from '@mui/material/Button';

export default function Vision() {

    var counter = 0;

    const zoom = () => {
        console.log(counter % 2 !== 0)
        counter = counter + 1;
        if (counter % 2 !== 0) document.body.style.zoom = "150%";
        else document.body.style.zoom = "100%";
    }
    return (
        <div>
            <Button onClick={zoom} style={{ backgroundColor: "#017aa7", position: "fixed", left: '3vw', bottom: "5vh" }} variant="contained">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-universal-access" viewBox="0 0 16 16">
                    <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
                </svg>
            </Button>
        </div>
    )
}