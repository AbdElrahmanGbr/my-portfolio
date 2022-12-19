import {Experience, PageInfo, Project, Skill, Social} from "../typings";

export const fetchData = async <T>(url: string): Promise<T> => {
    const res = await fetch(url);
    const data = await res.json();
    return data as T;
}
export const fetchExperiences = async(): Promise<Experience[]> => {
    return (await fetchData<{ experiences: Experience[] }>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)).experiences;
}

export const fetchPageInfo = async(): Promise<PageInfo> => {
    return (await fetchData<{ pageInfo: PageInfo }>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)).pageInfo;
}

export const fetchProjects = async(): Promise<Project[]> => {
    return (await fetchData<{ projects: Project[] }>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)).projects;
}

export const fetchSkills = async(): Promise<Skill[]> => {
    return (await fetchData<{ skills: Skill[] }>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)).skills;
}

export const fetchSocials = async(): Promise<Social[]> => {
    return (await fetchData<{ socials: Social[] }>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)).socials;
}