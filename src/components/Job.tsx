import React from "react";
import {IJobListing} from "../interfaces/jobListing.interface";
import {Icon, Label, Segment, SegmentGroup} from "semantic-ui-react";

export const Job = (job: IJobListing) => {
    return (
        <SegmentGroup className='featureOnHover widen whiteBackground'>
            <SegmentGroup horizontal>
                <Segment>
                    <h4>{job.position}</h4>
                    {job.new ? <Label color='green'>New!</Label> : ''}
                </Segment>
            </SegmentGroup>
            <SegmentGroup horizontal>
                <Segment>
                    <img src={job.logo} alt='logo'/>
                </Segment>
                <Segment>
                    <p><Icon name='location arrow'/> {job.location}</p>
                    <p><Icon name='briefcase'/>{job.role}</p>
                    <i>Posted: {job.postedAt}</i>
                </Segment>
            </SegmentGroup>
            <SegmentGroup horizontal>
                <Segment color={job.featured ? 'green' : 'black'}>
                    {job.languages.map((language) => {
                        return (
                            <Label>
                                <Icon name='code'/>{language}
                            </Label>
                        )
                    })}
                </Segment>
            </SegmentGroup>
        </SegmentGroup>
    );
}
