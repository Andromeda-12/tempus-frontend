/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MemberDto = {
    /**
     * User id
     */
    id: number;
    /**
     * Email
     */
    email: string;
    /**
     * User firstname
     */
    firstName: string;
    /**
     * User lastname
     */
    lastName: string;
    /**
     * User avatar (Url)
     */
    avatar: string;
    /**
     * Member role
     */
    role: 'Owner' | 'Manager' | 'Member';
};