/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MembersInfo } from './MembersInfo';
import type { UserDto } from './UserDto';

export type TaskDto = {
    /**
     * Unique identificator
     */
    id: number;
    /**
     * Task title
     */
    title: string;
    /**
     * Task is complete?
     */
    isComplete: boolean;
    /**
     * Task description
     */
    description?: string;
    /**
     * Creator
     */
    creator: UserDto;
    /**
     * Members assigned to task
     */
    members: Array<MembersInfo>;
};
