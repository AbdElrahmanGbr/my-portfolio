import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
    return (<div className={"bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0"}>
            <Head>
                <title>Hlbessa's Portfolio</title>
            </Head>

            <Header/>
            <section id={"hero"} className={"snap-start"}>
                <Hero/>
            </section>

            <section id={"hero"} className={"snap-center"}>
                <About/>
            </section>

            <section id={"experience"} className={"snap-center"}>
                <Projects/>
            </section>

        <section id={"skills"} className={"snap-start"}>
            <Skills/>
        </section>
            {/*Projects*/}

            {/*Contact Me*/}
        </div>)
}
