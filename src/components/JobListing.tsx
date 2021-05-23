import React, {useState} from "react";
import {IJobListing} from "../interfaces/jobListing.interface";
import {Job} from "./Job";

export const JobListing = () => {
    const [jobs, setJobs] = useState<IJobListing[]>([]);

    // Component Will Mount
    React.useEffect(() => {
        const fetchData = async () => {
            const jobsDto: IJobListing[] = await fetch('https://raw.githubusercontent.com/frontendmentorio/static-job-listings/master/data.json')
                .then(response => response.json());
            console.log(jobsDto);
            setJobs(jobsDto);
        }
        fetchData();
    }, []);

    return (
        <div className="flexContainer">
            {jobs.map((job) => {
                return <Job key={job.id} {...job}/>
            })}
        </div>
    );

}
