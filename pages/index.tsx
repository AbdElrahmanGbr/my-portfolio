import Head from 'next/head'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
// import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import {GetStaticProps} from "next";
import Link from "next/link";
import {Experience, PageInfo, Project, Skill, Social} from "../typings";
import {fetchExperiences, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials} from "../utils/fetchData";
import WorkExperience from "../components/WorkExperience";

type Props = {
    pageInfo: PageInfo; skills: Skill[]; experiences: Experience[]; projects: Project[]; socials: Social[];
}
const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
    return (<div
        className={"bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"}>
        <Head>
            <title>AbdElrahman&apos;s Portfolio</title>
        </Head>

        <Header socials={socials}/>
        <section id={"hero"} className={"snap-start"}>
            <Hero pageInfo={pageInfo}/>
        </section>

        <section id={"hero"} className={"snap-center"}>
            <About pageInfo={pageInfo}/>
        </section>

        <section id={"experience"} className={"snap-center"}>
            <WorkExperience experiences={experiences} />
        </section>

        <section id={"skills"} className={"snap-start"}>
            <Skills skills={skills}/>
        </section>

        <section id={"projects"} className={"snap-start"}>
            <Projects projects={projects}/>
        </section>

        <section id={"contact"} className={"snap-start"}>
            <ContactMe/>
        </section>
        <Link href={"#hero"}>
            <footer className={"sticky bottom-5 w-full cursor-pointer"}>
                <div className={"flex items-center justify-center"}>
                    <img className={"h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"}
                         src="https://cdn-icons-png.flaticon.com/512/3082/3082422.png" alt=""/>
                </div>
            </footer>
        </Link>
    </div>)
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
    return {
        props: {
            pageInfo, experiences, skills, projects, socials
        },
        revalidate: 60,
    }
}
