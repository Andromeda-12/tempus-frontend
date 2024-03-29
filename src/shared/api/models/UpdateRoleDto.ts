/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

export type UpdateRoleDto = {
    /**
     * New member role
     */
    role: Role;
    /**
     * Member id for change role
     */
    memberId: number;
};
