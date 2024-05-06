import Image from "next/image";
import "../style/landing.css";
import Background1 from "../assets/jonathan-falcon-UZDsLcSmlPc-unsplash.jpg";
import Background2 from "../assets/jonathan-falcon-FHo6yZq6l30-unsplash.jpg";

export function LandingTitle() {
    return (
        <section className="landing-title">
            <div className="title-item">
                <h1>En garde!</h1>
            </div>
            <div className="title-item">
                <h1>Prêts?</h1>
            </div>
            <div className="title-item">
                <h1>Allez!</h1>
            </div>
        </section>
    )
}
export function LandingBackground() {
    return (
        <section className="landing-background">
            <Image
                src={Background2}
                alt={""}
                width={undefined}
                height={undefined}
            />
            <Image
                src={Background1}
                alt={""}
                width={undefined}
                height={undefined}
            />
        </section>
    )
}
